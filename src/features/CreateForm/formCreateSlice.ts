import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../store/store";
import {
  createForm,
  DynamicFormResult,
  FieldsInterface,
  FormsDataFieldsInterface,
} from "../../store/actions/dynamicForms";
import { ACTIONS_TYPE } from "../../store/actionType";

interface FormsCreateState {
  data: FormsDataFieldsInterface[];
  isLoading: boolean;
  error: string | null;
}

const initialState: FormsCreateState = {
  data: [],
  isLoading: false,
  error: null,
};

function startLoading(state: FormsCreateState) {
  state.isLoading = true;
}

function loadingFailed(state: FormsCreateState, action: PayloadAction<string>) {
  state.isLoading = false;
  state.error = action.payload;
}

export const formCreateSlice = createSlice({
  name: "createForm",
  initialState,
  reducers: {
    getCreateFormStart: startLoading,
    getFormCreateSuccess(state, { payload }: PayloadAction<DynamicFormResult>) {
      const { data } = payload;
      state.data = data;
      state.isLoading = false;
      state.error = null;
    },
    getFormCreateFailure: loadingFailed,
  },
});
export const {
  getCreateFormStart,
  getFormCreateSuccess,
  getFormCreateFailure,
} = formCreateSlice.actions;

export const userSelector = (state: RootState) => state.dynamicFormReducer;

export default formCreateSlice.reducer;

export const postDynamicFrom =
  (values: FieldsInterface): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(getCreateFormStart());
      const result = await createForm(ACTIONS_TYPE.DYNAMICS_FORMS_LIST, values);
      dispatch(getFormCreateSuccess(result));
    } catch (err) {
      dispatch(getFormCreateFailure(err.toString()));
    }
  };

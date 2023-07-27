import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState, AppThunk } from "../../store/store";
import {
  DynamicFormResult,
  FormsDataFieldsInterface,
  getAllForm,
} from "../../store/actions/dynamicForms";
import { ACTIONS_TYPE } from "../../store/actionType";

interface DynamicFormsState {
  currentPage: number;
  count: number;
  data: FormsDataFieldsInterface[];
  isLoading: boolean;
  error: string | null;
}

const initialState: DynamicFormsState = {
  currentPage: 1,
  count: 0,
  data: [],
  isLoading: false,
  error: null,
};

function startLoading(state: DynamicFormsState) {
  state.isLoading = true;
}

function loadingFailed(
  state: DynamicFormsState,
  action: PayloadAction<string>
) {
  state.isLoading = false;
  state.error = action.payload;
}

export const dynamicFormsSlice = createSlice({
  name: "dynamicForms",
  initialState,
  reducers: {
    getDynamicFormsStart: startLoading,
    getDynamicFormsSuccess(
      state,
      { payload }: PayloadAction<DynamicFormResult>
    ) {
      const { count, data } = payload;
      state.count = count;
      state.data = data;
      state.isLoading = false;
      state.error = null;
    },
    getDynamicFormsFailure: loadingFailed,
  },
});
export const {
  getDynamicFormsStart,
  getDynamicFormsSuccess,
  getDynamicFormsFailure,
} = dynamicFormsSlice.actions;

export const userSelector = (state: RootState) => state.dynamicFormReducer;

export default dynamicFormsSlice.reducer;

export const fetchDynamicFromList =
  (page?: number): AppThunk =>
  async (dispatch) => {
    try {
      dispatch(getDynamicFormsStart());
      const result = await getAllForm(ACTIONS_TYPE.DYNAMICS_FORMS_LIST, page);
      console.log("Dynamic", result);
      dispatch(getDynamicFormsSuccess(result));
    } catch (err) {
      dispatch(getDynamicFormsFailure(err.toString()));
    }
  };

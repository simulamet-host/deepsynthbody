import { createSlice } from "@reduxjs/toolkit";
import classNames from "classnames";
import {
    singleArrow,
    HomeIcon,
    doubleArrow,
    modelsIcon,
} from "../components/icons";
import chevronRight from "../components/icons/";
import { useRouter } from "next/router";
import { AiOutlineHome  } from 'react-icons/ai';
import { BsChevronRight, BsChevronDoubleRight  } from 'react-icons/bs';
import { IoPlaySkipBackSharp  } from 'react-icons/io5';

export const userSlice = createSlice({
    name: "myFooter",

    initialState: {
        value: ""
    },
    reducers: {
        getState: (state, action) => {
            state.value = action.payload
        },

        takeFooter: (state, action) => {
            state.value= action.payload
        },

    },
});

export const { takeFooter } = userSlice.actions;
export default userSlice.reducer;



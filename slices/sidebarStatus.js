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
import { useState } from "react";


export const userSlice = createSlice({
    name: "status",

    initialState: {
        
        value: [
            { id: 1, label: "Main Categories", icon: HomeIcon , link: "/" },
            { id: 2, label: "Level 1", icon: singleArrow, link: ""},
            { id: 3, label: "Level 2", icon: doubleArrow, link: ""},
            { id: 4, label: "Models", icon: modelsIcon, link: ""},
            { id: 5, label: "News", icon: modelsIcon, link: "" },
            { id: 6, label: "newsModels", icon: singleArrow, link: "" }
        ]
    },
    reducers: {
        getState: (state, action) => {
            state.value = action.payload
        },

        Subcategory: (state, action) => {
            state.value.map(item => item.id === 2 ? item.link = `/${(window.location.href.match(/([^\/]*)\/*$/)[1])}` : false)
        },

        Subsubcategory: (state, action) => {
            state.value.map(item => item.id === 3 ? item.link = `/subsubcategory/${(window.location.href.match(/([^\/]*)\/*$/)[1])}` : false)
        },

        BacktoModels: (state, action) => {
            state.value.map(item => item.id === 4 ? item.link = `/subsubcategory/3rdSubcategory/${(window.location.href.match(/([^\/]*)\/*$/)[1])}` : false)
        },

        NewsPage: (state, action) => {
            state.value.map(item => item.id === 5 ? item.link = `/news/news` : false);
            state.value.map(item => item.id === 5 ? item.label="News" : false);
        },

        clearLinks: (state, action) => {
            state.value[1].link = "";
            state.value[2].link = "";
            state.value[3].link = "";
            state.value[4].link = "";
            state.value[5].link = "";
        },
        clearSecondThirdLink: (state, action) => {
            state.value[2].link = "";
            state.value[3].link = "";
        },
        clearThirdLink: (state, action) => {
            state.value[3].link = "";
        },
        levelOneName: (state, action) => {
            state.value[1].label = action.payload;
        },
        levelTwoName: (state, action) => {
            state.value[2].label = action.payload;
        },
        levelThreeName: (state, action) => {
            state.value[3].label = action.payload;
        },
    },
});

export const { Subcategory, getState, Subsubcategory, BacktoModels,
    clearLinks, clearSecondThirdLink, clearThirdLink,
    levelOneName, levelTwoName, levelThreeName, NewsPage, newsModels } = userSlice.actions;
export default userSlice.reducer;



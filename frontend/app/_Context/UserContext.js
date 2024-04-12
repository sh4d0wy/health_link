"use client"

import React, { useState,createContext } from 'react'

const UserContext = createContext({
    firstName:'',
    lastName:'',
    email:''
});


export default UserContext;
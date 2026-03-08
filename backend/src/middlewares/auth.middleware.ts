/*
 * @copyright (c) 2026 codewithavra
 * @license Apache-2.0
 */


/**
 * @Purpose : Protect Routes like -
 * login, dashboard , ... etc
*/

/**
 * node modules
*/
import type { Request , Response, NextFunction } from "express";

/**
 * other modules
 */
import { ApiError, asyncHandler } from "../utils";
import { ENV } from "../ENV";
import  jwt from "jsonwebtoken";
import { User } from "../models/user.model";



export const verifyJWT = asyncHandler(async function(req :Request ,res : Response,next : NextFunction){

    /**
     * get accesstoken
     */
    const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");

    /**
     * verify token
     */
    if(!token){
        throw new ApiError(401,`Unauthorized request`);
    }

    /**
     * verify Token
     */
    const decoded = jwt.verify(token, ENV.ACCESSTOKEN_SECRET!) as { sub: string };

    /**
     * get user
     */
    const user = await User.findById(decoded.sub).select("-password -refreshToken");

    if (!user) throw new ApiError(401, "Invalid AccessToken");

    req.user = user;
    next();
})

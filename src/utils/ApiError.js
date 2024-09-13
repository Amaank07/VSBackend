// This file is to stadardize all our error response across our application for ease of debugging we are going to use the stadard Error class of Node js and inherit in our class and then make the stadardization 
// in may repositories we can find the apiErrors files for standardization is often dosens of dosens and maybe even hundred line long because it's very specefic stadard project to project and helps to debug all the problems in the code properly 


class ApiError extends Error {  // basically we are inheriting the Error class which is a standard class in node js 
    constructor(
        statusCode,
        message = "Something went wrong",
        errors = [],
        stack = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false
        this.errors = errors

        if(stack){
            this.stack = stack
        }else {
            Error.captureStackTrace(this,this.constructor)
        }
    }
}

export {ApiError}
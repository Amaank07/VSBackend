// using promises method
const asyncHandler = (requestHandler) => {
    (req, res, next)=>{
        Promise.resolve(requestHandler(req, res, next)).
        catch((err)=> next(err))
    }
}

export default asyncHandler



// using try catch method
/*
const asyncHandler = (func) => async (req, res, next) => {    // this is basically writing as const asyncHandler = () => { () => } only we are not using the curly braces
        
            try{
                await func(req, res, next)
            }
         catch (error) {
            res.status(err.code || 500).json({
                success: false,
                message: err.message
            })
        }
}
        */


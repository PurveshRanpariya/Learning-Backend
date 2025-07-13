const asynHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}



export {asynHandler}







// const asynHandler = () => {}
// const asynHandler = (func) => () => {}
// const asynHandler = (func) => async() => {}



// const asynHandler = (fn) => async(req, res, nexr) => {
//     try {
//         await false(req, res, next)
        
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success: false,
//             message: error.message
//         })
        
//     }
// }
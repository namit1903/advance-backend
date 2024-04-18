class ApiError extends Error {
  constructor(
    statusCode,message="something galat hua hai",
    errors=[],
    stack=""
  ){
    super(message)
    this.statusCode=statusCode;
    this.data=null;//padho documentation
    this.message=message;
    this.success=false;
    this.errors=errors;

    if(stack){
      this.stack=stack;

    }
    else{
      Error.captureStackTrace(this,this.constructor)
    }
  }
}
export {ApiError}
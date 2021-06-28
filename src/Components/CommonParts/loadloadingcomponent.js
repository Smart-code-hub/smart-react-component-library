

 const loadloadingcomponent = () => {
    return (
        `  if(loading){
            return <LoadingComponent/>
          }
          `
    )
}
const loadErrorcomponent = () => {
    return (
        `  if(error){
            return <ErrorComponent message={error}/>
          }
          `
    )
}


module.exports = {loadloadingcomponent,loadErrorcomponent}
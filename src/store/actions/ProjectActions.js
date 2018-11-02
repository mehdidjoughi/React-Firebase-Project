export const createProject = (project) => {
 
    return (dispatch , getState , { getFirebase , getFirestore} ) =>{
        // make async call to database

        
        const firestore = getFirestore();
        const profile = getState().firebase.profile
        const profileUid = getState().firebase.auth.uid
        firestore.collection('projects').add({
            ...project,
            authorFirstName :  profile.firstName,
            authorLastName : profile.lastName,
            authorId : profileUid,
            createdAt : new Date() ,

        }).then( () => {
            dispatch({ type : 'CREATE_PROJECT' , project : project})
        }).catch( (err) => {
            dispatch({ type : 'CREATE_PROJECT_ERROR' , err })
        })
        

        
    }

}
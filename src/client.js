import sanityClient from '@sanity/client'

//connects to sanity backend cms 
export default sanityClient ({
    projectId: "5siazgph",
    dataset: "production"
})



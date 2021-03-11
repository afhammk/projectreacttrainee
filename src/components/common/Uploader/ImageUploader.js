import React,{useState} from 'react'
import CancelIcon from "@material-ui/icons/Cancel";
import AddIcon from "@material-ui/icons/Add";
import {Button } from "@material-ui/core";
import {userServices} from '../../services/Services';
import LinearProgress from '@material-ui/core/LinearProgress';
import { makeStyles } from "@material-ui/core/styles";
import DeleteDialog from '../../common/Dialog/DeleteDialog';


/*
:: S A B E E R ::
onUploadCompleted={() => {}}
onUploadProgress={() => {}}
multipleUpload={true}
uploadUrl=""
deleteUrl=""*/

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center"
  },
  wrapper: {
    margin: theme.spacing(1),
    position: "relative"
  },
  linearProgress: {
    backgroundColor: '#ffffff',
    position: "absolute",
    top: 0,
    width: "100%",
    height: "100%",
    opacity: 0.9,
    borderRadius: 4
  }
}));


let uploadIndex = 1;
const ImageUploader = (props) => {

  const classes = useStyles();

    /*const [state, setState] = useState({
        photos: props.existingImages != undefined ? props.existingImages : [],
        uploaded:null,
      })*/


      const [photos, setPhotos] = useState(props.existingImages != undefined ? props.existingImages :[])

    //const [progress, setProgress] = useState("")


    const onSelect = (e)=>{
        const selectedImages = [...e.target.files];
        var encodedImages = photos;//[...state.photos];
        selectedImages.map((val,i)=>{
          const FR = new FileReader();
          FR.readAsDataURL(val);
          FR.onload = e => {
            console.log('uploadImage'+uploadIndex);
            encodedImages.push({
              id:'uploadImage'+uploadIndex,
              isUploading:true,
              url:e.target.result
            })
            selectedImages[i].lid = 'uploadImage'+uploadIndex;
            console.log('selectedImages[i]',selectedImages[i]);
            uploadIndex++;
          }
        })
        setTimeout(() => {
            //console.log('FILE',imgName)
          //setState({...state,photos:encodedImages,uploaded:selectedImages})  

          //UPLOAD REQUEST
          //setState({...state,photos:encodedImages});
          setPhotos(encodedImages)
          console.log('LENGTH encodedImages',encodedImages.length)
          console.log('LENGTH state.photos',photos.length)
          console.log('LENGTH selectedImages',selectedImages.length)
          selectedImages.map((val)=> {

            let formdata = new FormData();
            if(props.defaultFormData != null && props.defaultFormData !== undefined){
                Object.keys(props.defaultFormData).forEach(key => formdata.append(key, props.defaultFormData[key]));
            }

            console.log('IMAGE',val)
          formdata.append("photo[]", val )
  
            userServices
            .postReq(formdata,props.uploadEndPoint,(event) => {
              setProgress(val.lid,Math.round((100 * event.loaded) / event.total))
            console.log(`PROGRESS ${val.name}`,Math.round((100 * event.loaded) / event.total));
          }).then(response => {
                if(response.isSuccess){
                  setTimeout(()=>{
                    setUploadComplete(val.lid,response.uploads[0].file.id,response.uploads[0].file.url)
                  },1000)

                }
                console.log('RESPONSE',response)
          })
  
        })
          
        }, 1000);
    }

    const setUploadComplete = (localId,remoteId,url) => {
      //update Image State
      //let photos = state.photos.map((photo)=>{
      let moifiedPhotos = photos.map((photo)=>{
        if(photo.id == localId){
          photo.id = remoteId;
          photo.isUploading = false;
          photo.url = url;
        }

        return photo;
      })

      //setState({...state,photos:photos});
      setPhotos(moifiedPhotos);
    }

    const setProgress = (localId,progress) => {

      console.log('LENGTH BEFORE',photos.length)
      

      //update Image State
      let modifiedPhotos = photos.map((photo)=>{
        if(photo.id == localId){
          photo.isUploading = true;
          photo.progress = progress
        }

        return photo;
      })

      console.log('LENGTH AFTER',modifiedPhotos.length)

      setPhotos(modifiedPhotos);
    }

    const onDeleteSuccess = (id) => {

      console.log('LENGTH BEFORE',photos.length)

      let modifiedPhotos = photos.filter( photo => {
        if(photo.id !== id){
          return photo;
        }
      })

      console.log('LENGTH AFTER',modifiedPhotos.length)

      setPhotos(modifiedPhotos);
    }

    return(
        <div>
          <div className="photo-btn">
              <input
                onChange={onSelect}
                accept="image/*"
                className="hidden"
                id="contained-button-file"
                multiple
                type="file"/>
              <label htmlFor="contained-button-file">
                <Button component="span" variant="contained">
                  <AddIcon />
                </Button>
              </label>
            </div>
            {photos.map((image)=>{
                return <div key={Math.random()} className="natural" style={{border:'1px solid #ddd',marginLeft:10}}>
                            {(image.isUploading != null && image.progress != null && image.isUploading == true) &&                             <LinearProgress
                              variant="determinate"
                              color="primary"
                              value={image.progress}
                              className={classes.linearProgress}
                            />}
                            <img src={image.url} alt={'IMAGE - '+image.id} style={{marginLeft:0}}/>
                            {(image.isUploading == null || image.isUploading === undefined || !image.isUploading) && 
                            <div style={{position:'absolute',width:24,height:24,top:0,right:0}}>
                              <DeleteDialog launchIcon={<CancelIcon fontSize="small" />} endPoint={`${props.deleteEndPoint+'/'+image.id}`} onDeleteSuccess={()=>{ console.log('DELETED'); onDeleteSuccess(image.id); }} message={`Are you sure deleting it. You will not be able to undo it later.`}/>
                            </div>}
                            
                        </div>
            })}
        </div>
    )
}

export default ImageUploader

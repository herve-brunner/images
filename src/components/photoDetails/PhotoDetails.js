function PhotoDetails(props) {
    


  return (
    <div className="photo-details">
        <div><img src={props.thumbnailUrl} alt="" /></div>
        <div>{props.title}</div> 
        <div>{props.id}</div>
        <div>{props.albumId}</div> 
        <div><button onClick={props.onClose}>Close</button></div> 
    </div>
  );
}

export default PhotoDetails;

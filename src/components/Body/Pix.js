import { Icon } from "@material-ui/core";
import { Alert, Loader, Uploader } from "rsuite";
import React from "react";

export function previewFile(file, callback) {
  const reader = new FileReader();
  reader.onloadend = () => {
    callback(reader.result);
  };
  reader.readAsDataURL(file);
}

const styles = {
  width: 200,
  height: 150,
  borderRadius: "5px",
  border: "1px solid lightgray",
};

export const ImageUploader = () => {
  const [uploading, setUploading] = React.useState(false);
  const [fileInfo, setFileInfo] = React.useState(null);

  return (
    <Uploader
      fileListVisible={false}
      listType="picture"
      action="//jsonplaceholder.typicode.com/posts/"
      onUpload={(file) => {
        setUploading(true);
        previewFile(file.blobFile, (value) => {
          setFileInfo(value);
        });
      }}
      onSuccess={(response: Object, file: FileType) => {
        setUploading(false);
        Alert.success("Uploaded successfully");
        console.log(response);
      }}
      onError={() => {
        setFileInfo(null);
        setUploading(false);
        Alert.error("Upload failed");
      }}
    >
      <button style={styles}>
        {uploading && <Loader backdrop center />}
        {fileInfo ? (
          <img src={fileInfo} width="100%" height="100%" />
        ) : (
          <Icon icon="avatar" size="5x" />
        )}
      </button>
    </Uploader>
  );
};

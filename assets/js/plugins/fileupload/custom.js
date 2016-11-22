$(document).ready(function() {
  $('.fileinput').fileinput();
  DropzoneJS snippet - js
    // instantiate the uploader
    $('#file-dropzone').dropzone({
      url: "/upload",
      maxFilesize: 100,
      paramName: "uploadfile",
      maxThumbnailFilesize: 5,
      init: function() {

        this.on('success', function(file, json) {
        });

        this.on('addedfile', function(file) {

        });

        this.on('drop', function(file) {
          alert('file');
        });
      }
    });

});

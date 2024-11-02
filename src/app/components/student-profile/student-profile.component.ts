import { Component, ElementRef, ViewChild } from '@angular/core';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Location } from '@angular/common';


@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent {
  public Editor = ClassicEditor;
  public editorData = ''; // CKEditor content
  public editorConfig = {
    placeholder: '.... قم بالكتابة هنا',
    toolbar: {
      items: [
        'bold', 'italic', '|', 'undo', 'redo', '|', 'blockQuote', 'insertTable', 'mediaEmbed'
      ]
    }
  };

  constructor(private location: Location) {}

  isInternShipModalOpen = false; // For the first modal
  isNewModalOpen = false; // For the new modal
  
  isCollapse = false;
  iswhatsOpen = false;
  isFileUploadActive = false;


  resetView() {
    this.isFileUploadActive = false;
    this.cameraOpen = false;
    this.editorData = '';
  }

  openCollapse(){
    this.isCollapse = true;
    this.iswhatsOpen = false;
    this.activeButton = 'whats';
  }

  openWhats(){
    this.isCollapse = false;
    this.iswhatsOpen = true;
    this.activeButton = 'collapse';
  }

  activeButton: string = ''; 

  iscerti = false;
  iscertiG = false;

  openCertiP() {
    this.activeButton = 'certi';
    this. iscerti = true;
    this.iscertiG = false;
  }

  openCertiG() {
    this.activeButton = 'certiG';
    this. iscerti = false;
    this.iscertiG = true;
  }

  isfileUploadView = false;
  iswordFileView = false;
  public cameraOpen: boolean = false;

  toggleFileUpload(){
  this.isfileUploadView = true;
  this.iswordFileView = false;
  this.cameraOpen = false;

}

togglWord(){
  this.isfileUploadView = false;
  this.iswordFileView = true;
  this.cameraOpen = false;
}

toggleCamera() {
  this.isfileUploadView = false;
  this.iswordFileView = false;
  this.cameraOpen = true;
  this.capturedImage = null; // Reset captured image preview
  this.openCamera();
}



  // Method to open the new modal and close the current one
  openNewModal() {
    this.isNewModalOpen = true;
    this.isInternShipModalOpen = false; // Close the current modal
 
  }

  closeCurrentModal() {
    this.isInternShipModalOpen = false;
  }

  private editorInstance: any; // Stores the CKEditor instance

  @ViewChild('fileInput') fileInput: ElementRef | undefined;
  @ViewChild('videoElement') videoElement!: ElementRef<HTMLVideoElement>;

  capturedImage: string | ArrayBuffer | null = null;
 
  private videoStream: MediaStream | null = null;

  // Method to trigger file input dialog
 
triggerFileUpload() {
  this.fileInput?.nativeElement.click();
}

  // Method to handle file selection

  // Goals
  
  // onFileSelected(event: any): void {
  //   const file = event.target.files[0];
  //   if (file) {
  //     const reader = new FileReader();
  //     reader.onload = (e: any) => {
  //       this.capturedImage = e.target.result; // Convert image to base64
  //       this.insertImageIntoEditor(this.capturedImage as string); // Insert into CKEditor
  //     };
  //     reader.readAsDataURL(file); // Read file as base64
  //   }
  // }

  uploadedImage: string | ArrayBuffer | null = null;  // For file upload preview
  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.uploadedImage = e.target.result; // Preview the image
      };
      reader.onerror = (error) => {
        console.error('File reading error:', error);
      };
      reader.readAsDataURL(file); // Reads file for preview
    } else {
      console.error("No file selected or file reading failed.");
    }
  }
  



  // Method called when CKEditor is ready
  onReady(editor: any): void {
    this.editorInstance = editor; // Store the CKEditor instance
  }

  // Method to insert the image into CKEditor
  insertImageIntoEditor(imageSrc: string): void {
    if (this.editorInstance) {
      this.editorInstance.model.change((writer: any) => {
        const imageElement = writer.createElement('imageBlock', {
          src: imageSrc
        });
        this.editorInstance.model.insertContent(imageElement, this.editorInstance.model.document.selection);
      });
    }
  }

  goBack(): void {
    this.location.back();
  }
  // Opens the camera
  // openCamera(): void {
  //   this.cameraOpen = true; // Show camera feed
  //   navigator.mediaDevices.getUserMedia({ video: true })
  //     .then((stream) => {
  //       this.videoStream = stream;
  //       const video = this.videoElement.nativeElement;
  //       video.srcObject = stream;
  //       video.play();
  //     })
  //     .catch((error) => {
  //       console.error('Error accessing camera:', error);
  //     });
  // }


  openCamera(): void {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then((stream) => {
        this.videoStream = stream;
        this.videoElement.nativeElement.srcObject = stream;
        this.videoElement.nativeElement.play();
      })
      .catch((error) => console.error('Error accessing camera:', error));
  }

  // Capture the photo from the camera stream
  // capturePhoto(): void {
  //   if (this.videoElement && this.videoElement.nativeElement) {
  //     const video = this.videoElement.nativeElement;

  //     // Create canvas to capture the frame
  //     const canvas = document.createElement('canvas');
  //     canvas.width = video.videoWidth;
  //     canvas.height = video.videoHeight;
  //     const context = canvas.getContext('2d');

  //     if (context) {
  //       // Draw video frame onto the canvas
  //       context.drawImage(video, 0, 0, canvas.width, canvas.height);

  //       // Convert canvas content to a base64 image
  //       this.capturedImage = canvas.toDataURL('image/png');
  //       this.insertImageIntoEditor(this.capturedImage); // Insert into CKEditor
  //       this.stopCamera(); // Stop camera after capturing photo
  //     }
  //   }
  // }

  capturePhoto(): void {
    if (this.videoElement && this.videoElement.nativeElement) {
      const video = this.videoElement.nativeElement;
      const canvas = document.createElement('canvas');
      canvas.width = video.videoWidth;
      canvas.height = video.videoHeight;
      const context = canvas.getContext('2d');
      if (context) {
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        this.capturedImage = canvas.toDataURL('image/png');
        this.stopCamera(); // Stop the camera after capture
      }
    }
  }


  // Stop the camera stream
  // stopCamera(): void {
  //   if (this.videoStream) {
  //     this.videoStream.getTracks().forEach(track => track.stop());
  //     this.videoStream = null;
  //     this.cameraOpen = false;
  //   }
  // }

  stopCamera(): void {
    if (this.videoStream) {
      this.videoStream.getTracks().forEach(track => track.stop());
      this.videoStream = null;
      this.cameraOpen = false;
    }
  }


  showMoreData = false;
  whichClick = true;

  toggleMoreData() {
    this.showMoreData = !this.showMoreData;
    this.whichClick = !this.whichClick;
  }

  messages = [
    { text: 'hi', sent: false, timestamp: '10:00 AM' },
    
  ];
  messageText = '';

  sendMessage() {
    if (this.messageText.trim()) {
      this.messages.push({
        text: this.messageText,
        sent: true,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });
      this.messageText = '';
    }
  }
  
}
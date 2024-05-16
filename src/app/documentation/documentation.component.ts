import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-documentation',
  templateUrl: './documentation.component.html',
  styleUrls: ['./documentation.component.css']
})
export class DocumentationComponent implements OnInit {
  pdfs: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchUploadedDocuments();
  }

  onDrop(event: CdkDragDrop<any[]>): void {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.uploadDocument(file);
    }
  }

  uploadDocument(file: File): void {
    const formData = new FormData();
    formData.append('file', file);

    this.http.post<any>('http://8080/api/user/upload', formData).subscribe(
      (response) => {
        // Handle successful upload
        const uploadedDocument = {
          name: file.name,
          thumbnail: response.url, // Assuming the response contains the URL of the uploaded image
          // Add other metadata from response if needed
        };
        this.pdfs.push(uploadedDocument);
      },
      (error) => {
        // Handle upload error
        console.error('Failed to upload document:', error);
      }
    );
}


  fetchUploadedDocuments(): void {
    this.http.get<any[]>('http://8080/api/user/upload/documents').subscribe(
      (documents) => {
        // Populate pdfs array with already uploaded documents fetched from the server
        this.pdfs = documents;
      },
      (error) => {
        console.error('Failed to fetch uploaded documents:', error);
      }
    );
  }

  isImage(fileName: string): boolean {
    // Get file extension
    const extension = fileName.split('.').pop()?.toLowerCase();
    // Check if the extension corresponds to an image format
    return extension === 'jpg' || extension === 'jpeg' || extension === 'png' || extension === 'gif';
  }
}

import { Component, OnInit } from '@angular/core';
import { FileUploader, FileItem, ParsedResponseHeaders } from 'ng2-file-upload';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  imported = false;

  uploaderImportFile: FileUploader;

  constructor() { }

  ngOnInit() {
    this.uploaderImportFile = new FileUploader({url: `api/video`});
    this.uploaderImportFile.onSuccessItem = (item: FileItem, response: string, status: number, headers: ParsedResponseHeaders) => {
      this.imported = true;
    };
  }

  importFile() {
    this.uploaderImportFile.setOptions({url: `api/video`});
    setTimeout(() => {
      this.uploaderImportFile.uploadAll();
    });
  }

}

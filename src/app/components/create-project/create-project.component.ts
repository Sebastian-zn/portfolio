import { Component, OnInit } from '@angular/core';
import { Project } from '../../models/project';
import { ProjectService } from '../../services/project.service';
import { UploadService } from '../../services/upload.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css'],
  providers: [ProjectService, UploadService]
})
export class CreateProjectComponent implements OnInit {
  public title: string;
  public project: Project;
  public status: string;
  public filesToUpload: Array<File>;

  constructor(private _projectService: ProjectService, private _uploadService: UploadService) {
    this.title = 'Add Project';
    this.project = new Project('', '', '', '', '', '');
  }

  ngOnInit(): void {
  }

  onSubmit(form) {
    this._projectService.saveProject(this.project).subscribe(
      response => {
        if (response.project) {
          this.status = 'success';
          this._uploadService.fileRequest(Global.url + 'upload-image/' + response.project._id, [''], this.filesToUpload, 'image').then((result: any) => {
            form.reset();
          });
        } else {
          this.status = 'failed';
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  fileChangeEvent(fileInput: any) {
    this.filesToUpload = <Array<File>>fileInput.target.files;
  }

}

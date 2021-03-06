import {Component, ViewChild, Type} from '@angular/core';
import {ImageCropperComponent, CropperSettings, Bounds} from '../index';
import {Style} from 'ng2-styler';


@Style({
    "h3": {
      paddingBottom: "20px",
      borderBottom: "1px solid #A0A0A0"
    },

    "h4": {
        paddingBottom: "20px",
        paddingTop: "20px",
        borderTop: "1px solid #A0A0A0"
    },
    ".result": {
        marginTop: "30px",
        border: "1px solid rgba(125,125,125,0.6)",
        display: "inline-block",
        padding: "1px",

        "&.rounded": {
            "> img": {
                borderRadius: "100px"
            }
        }
    },

    ".pull-left": {
        minWidth: "400px",
        float: "left",
        marginRight: "10px",
        padding: "10px",
        backgroundColor: "rgba(0,0,0,0.05)",
        position: "relative",

    },


    ".file-upload": {
        height: "25px",
        width: "100px",
        position: "relative",
        borderRadius: "3px",

        display: "flex",
        justifyContent: "center",
        alignItems: "center",

        border: "1px solid #FFFFFF",
        overflow: "hidden",
        backgroundImage: "linear-gradient(to bottom, #2590EB 50%, #FFFFFF 50%)",
        backgroundSize: "100% 200%",
        transition: "all 1s",
        color: "#FFFFFF",
        fontSize: "100px",

        "&:hover": {
            backgroundPosition: "0 -100%",
            color: "#2590EB"
        },

        ".text": {
            fontSize: "14px"
        },


        "input[type='file']": {
            height: "25px",
            width: "100px",
            position: "absolute",
            top: "0",
            left: "0",
            opacity: "0",
            cursor: "pointer"
        }

    }
})
@Component({
    selector: 'test-app',
    template: `
    <div>
        <div class="pull-left">
            <h3>Sample cropper 1</h3>
            <img-cropper [image]="data1" [settings]="cropperSettings1" (onCrop)="cropped($event)"></img-cropper>
            <br>
            <span class="result" *ngIf="data1.image" >
                <img [src]="data1.image" [width]="cropperSettings1.croppedWidth" [height]="cropperSettings1.croppedHeight">
            </span>
            <h4>Settings:</h4>
            <pre>
this.cropperSettings1 = new CropperSettings();
this.cropperSettings1.width = 200;
this.cropperSettings1.height = 200;

this.cropperSettings1.croppedWidth = 200;
this.cropperSettings1.croppedHeight = 200;

this.cropperSettings1.canvasWidth = 500;
this.cropperSettings1.canvasHeight = 300;

this.cropperSettings1.minWidth = 100;
this.cropperSettings1.minHeight = 100;

this.cropperSettings1.rounded = false;

this.cropperSettings1.cropperDrawSettings.strokeColor = 'rgba(255,255,255,1)';
this.cropperSettings1.cropperDrawSettings.strokeWidth = 2;
            </pre>
        </div>


        <div class="pull-left">
            <h3>
                Sample cropper 2
            </h3>
           <div class="file-upload">
                <span class="text">upload</span>
                <input id="custom-input" type="file" (change)="fileChangeListener($event)">
            </div>

            <img-cropper #cropper [image]="data2" [settings]="cropperSettings2"></img-cropper>
            <br>
            <span class="result rounded" *ngIf="data2.image" >
                <img [src]="data2.image" [width]="cropperSettings2.croppedWidth" [height]="cropperSettings2.croppedHeight">
            </span>
            <h4>Settings:</h4>
            <pre>
this.cropperSettings2 = new CropperSettings();
this.cropperSettings2.width = 200;
this.cropperSettings2.height = 200;
this.cropperSettings2.keepAspect = false;

this.cropperSettings2.croppedWidth = 200;
this.cropperSettings2.croppedHeight = 200;

this.cropperSettings2.canvasWidth = 500;
this.cropperSettings2.canvasHeight = 300;

this.cropperSettings2.minWidth = 100;
this.cropperSettings2.minHeight = 100;

this.cropperSettings2.rounded = true;
this.cropperSettings2.minWithRelativeToResolution = false;

this.cropperSettings2.cropperDrawSettings.strokeColor = 'rgba(255,255,255,1)';
this.cropperSettings2.cropperDrawSettings.strokeWidth = 2;
this.cropperSettings2.noFileInput = true;
            </pre>
        </div>
    </div>`,
    directives: [ImageCropperComponent]
})
export class AppComponent extends Type {

    //Cropper 1 data
    data1:any;
    cropperSettings1:CropperSettings;

    //Cropper 2 data
    data2:any;
    cropperSettings2:CropperSettings;
    @ViewChild('cropper', undefined) cropper:ImageCropperComponent;


    constructor() {
        super();

        this.cropperSettings1 = new CropperSettings();
        this.cropperSettings1.width = 200;
        this.cropperSettings1.height = 200;

        this.cropperSettings1.croppedWidth = 200;
        this.cropperSettings1.croppedHeight = 200;

        this.cropperSettings1.canvasWidth = 500;
        this.cropperSettings1.canvasHeight = 300;

        this.cropperSettings1.minWidth = 100;
        this.cropperSettings1.minHeight = 100;

        this.cropperSettings1.rounded = false;

        this.cropperSettings1.cropperDrawSettings.strokeColor = 'rgba(255,255,255,1)';
        this.cropperSettings1.cropperDrawSettings.strokeWidth = 2;

        this.data1 = {};


        //Cropper settings 2
        this.cropperSettings2 = new CropperSettings();
        this.cropperSettings2.width = 200;
        this.cropperSettings2.height = 200;
        this.cropperSettings2.keepAspect = false;

        this.cropperSettings2.croppedWidth = 200;
        this.cropperSettings2.croppedHeight = 200;

        this.cropperSettings2.canvasWidth = 500;
        this.cropperSettings2.canvasHeight = 300;

        this.cropperSettings2.minWidth = 100;
        this.cropperSettings2.minHeight = 100;

        this.cropperSettings2.rounded = true;
        this.cropperSettings2.minWithRelativeToResolution = false;

        this.cropperSettings2.cropperDrawSettings.strokeColor = 'rgba(255,255,255,1)';
        this.cropperSettings2.cropperDrawSettings.strokeWidth = 2;
        this.cropperSettings2.noFileInput = true;

        this.data2 = {};

    }

    cropped(bounds:Bounds) {
        //console.log(bounds);
    }

    /**
     * Used to send image to second cropper
     * @param $event
     */
    fileChangeListener($event) {
        var image:any = new Image();
        var file:File = $event.target.files[0];
        var myReader:FileReader = new FileReader();
        var that = this;
        myReader.addEventListener('loadend', function (loadEvent:any) {
            image.src = loadEvent.target.result;
            that.cropper.setImage(image);
        });

        myReader.readAsDataURL(file);
    }
}

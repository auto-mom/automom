import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SpeechRecognizerService } from '../core/services/speech-services/speech-recognizer.service';
import { SpeechSynthesizerService } from '../core/services/speech-services/speech-synthesizer.service';
import { SpeechRecognitionComponent } from './speech-recognition.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        SpeechRecognitionComponent
    ],
    providers: [
        SpeechRecognizerService,
        SpeechSynthesizerService
    ]
})
export class WebSpeechModule { }
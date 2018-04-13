import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Rx";


@Component({
	selector: "application",
	templateUrl: "./app.html"
})
export class AppComponent implements OnInit{
	
	public userInput:String = "";

	public waitForMe:Observable<boolean>

	public previousAnswers: string[];

	public onUserTypeSomething(event):void {
		console.log(event);
		this.userInput = event.target.value;
	}
	ngOnInit(): void {
		this.previousAnswers = [];
		this.waitForMe = Observable.timer(5000).map(() => true);
	}

	addToPrevious (answer:string): void {
		this.previousAnswers.push(answer);
	}
	
}


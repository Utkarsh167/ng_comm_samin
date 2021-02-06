import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
  Input,
  Output,
  EventEmitter
} from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import {} from "googlemaps";

@Component({
  selector: "app-google-autocomplete",
  templateUrl: "./google-autocomplete.component.html",
  styleUrls: ["./google-autocomplete.component.scss"]
})
export class GoogleAutocompleteComponent implements OnInit, AfterViewInit {
  @Input() control;
  @Input() fbGroup: FormGroup;

  public searchControl: FormControl;
  @Output() selectedAddress = new EventEmitter<any>();
  @ViewChild("search", { static: true }) searchElementRef: ElementRef;
  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.initMap();
  }

  initMap() {
    var self = this;
    // this.control = new FormControl();
    // var autocomplete = new google.maps.places.Autocomplete(self.searchElementRef.nativeElement);
    // autocomplete.addListener('place_changed', function () {
    //   var place = autocomplete.getPlace();
    //   if (place) {
    //     let obj = {
    //       formatted_address: place.formatted_address,
    //       lat: place.geometry.location.lat(),
    //       lng: place.geometry.location.lng()
    //     }
    //     self.selectedAddress.emit(obj);
    //   }
    //   if (!place.geometry) {
    //     window.alert("No details available for input: '" + place.name + "'");
    //     return;
    //   }
    // });
  }

  getControl(control) {
    return this.fbGroup.controls[control];
  }
}

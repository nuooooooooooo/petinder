import {Component, OnInit} from '@angular/core';
import {Pet} from "../model/pet";
import {PetService} from "../service/pet.service";
import {FormBuilder} from "@angular/forms";
import {NgIf} from "@angular/common";
import { ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-setup-date',
  standalone: true,
  imports: [NgIf],
  templateUrl: './setup-date.component.html',
  styleUrl: './setup-date.component.css'
})
export class SetupDateComponent implements OnInit{
  private _pet: Pet;

  constructor(
      private petService: PetService,
      private formBuilder: FormBuilder,
      private route: ActivatedRoute
  ) {
  }


  get pet(): Pet {
    return this._pet;
  }

  ngOnInit(): void {
    this.route.params.subscribe(
        params => this.getPetByName(params["name"])
    )
  }

  private getPetByName(name: string) : void {
    this.petService.getPetByName(name).subscribe(namedPet => this._pet = namedPet)
  }
}

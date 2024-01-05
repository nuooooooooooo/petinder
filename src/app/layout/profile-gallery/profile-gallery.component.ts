import { Component, OnInit } from '@angular/core';
import { PetService } from '../../service/pet.service';
import { Pet } from '../../model/pet';
import { NgFor, NgIf } from '@angular/common';
import {NameFilterPipe} from "../../pipes/name-filter.pipe";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-profile-gallery',
  standalone: true,
  imports: [NgFor, NgIf, NameFilterPipe, FormsModule],
  templateUrl: './profile-gallery.component.html',
  styleUrl: './profile-gallery.component.css',
})
export class ProfileGalleryComponent implements OnInit {
  pets: Pet[];
  selectedPet: Pet;
  searchText: string;

  constructor(private petService: PetService) {
  }

  ngOnInit(): void {
    this.getPets()
  }

  getPets(): void {
    this.petService.getPets().subscribe(pets => this.pets = pets)
  }

  selectPet(pet: Pet) {
    this.selectedPet = pet
  }
}

import { Component, OnInit } from '@angular/core';
import { PetService } from '../../service/pet.service';
import { Pet } from '../../model/pet';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-profile-gallery',
  standalone: true,
  imports: [NgFor],
  templateUrl: './profile-gallery.component.html',
  styleUrl: './profile-gallery.component.css',
})
export class ProfileGalleryComponent implements OnInit {
  pets: Pet[] = [];
  constructor(private petService: PetService) {}
  ngOnInit(): void {
    this.getPets()
  }

  getPets(): void {
    this.petService.getPets().subscribe(pets => this.pets = pets)
  }

}

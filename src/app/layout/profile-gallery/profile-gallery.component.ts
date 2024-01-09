import {Component, OnInit} from '@angular/core';
import {PetService} from '../../service/pet.service';
import {Pet} from '../../model/pet';
import {NgFor, NgIf} from '@angular/common';
import {NameFilterPipe} from "../../pipes/name-filter.pipe";
import {FormsModule, FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {PetMapper} from "../../mapper/pet.mapper";
import {RouterLink} from "@angular/router";

@Component({
    selector: 'app-profile-gallery',
    standalone: true,
    imports: [NgFor, NgIf, NameFilterPipe, FormsModule, ReactiveFormsModule, RouterLink],
    templateUrl: './profile-gallery.component.html',
    styleUrl: './profile-gallery.component.css',
})
export class ProfileGalleryComponent implements OnInit {
    pets: Pet[];
    selectedPet: Pet | null;
    searchText: string;
    petForm = this.formBuilder.group({
        name: ['', Validators.required],
        kind: ['', Validators.required],
        image: ['', Validators.required],
        profileText: ['', Validators.required],
        popularity: ['', Validators.required]
    });

    constructor(
        private petService: PetService,
        private formBuilder: FormBuilder,
    ) {
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

    deletePet(id: number) {

        this.petService.deletePet(id).subscribe(
            data => {
                console.warn(data);
                this.getPets();
                this.selectedPet = null;
            }
        )

    }

    onSubmit() {
        // TODO: Use EventEmitter with form value
        console.warn(this.petForm.value);

        this.petService.addPet(PetMapper.toPet(this.petForm.value)).subscribe(
            data => {
                console.log(data);
                this.getPets();
            });
        this.petForm.reset();
    }
}

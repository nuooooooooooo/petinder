import {Pet} from "../model/pet";

export class PetMapper {
    static toPet(form: Partial<any>): Pet {
        return {id: 0, name: form["name"],kind: form["kind"],image: form["image"],profileText: form["profileText"],popularity: form["popularity"]}
    }
}

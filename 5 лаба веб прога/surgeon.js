import { Doctor } from "./doctor.js";

export class Surgeon extends Doctor {
    #specialization;

    constructor(name, experience, isSurgeon, specialization = "Общая хирургия") {
        super(name, experience, isSurgeon);
        this.#specialization = specialization;
    }

    get specialization() {
        return this.#specialization;
    }

    set specialization(value) {
        if (value === "Кардиохирургия" || value === "Нейрохирургия" || value === "Общая хирургия") {
            this.#specialization = value;
        } else {
            return "Специализация должна быть 'Кардиохирургия', 'Нейрохирургия' или 'Общая хирургия'.";
        }
    }

    show() {
        return super.show() + `\nСпециализация: ${this.#specialization}`;
    }

    static clone(originalSurgeon) {
        return new Surgeon(
            originalSurgeon.name,
            originalSurgeon.experience,
            originalSurgeon.isSurgeon,
            originalSurgeon.specialization
        );
    }

    delete() {
        super.delete();
        this.#specialization = null;
        return "Уничтожено.";
    }

    copy() {
        return this;
    }
}
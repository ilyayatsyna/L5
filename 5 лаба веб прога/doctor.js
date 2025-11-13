export class Doctor {
    #name;
    #experience;
    #isSurgeon;

    constructor(name = "Неизвестно", experience = 0, isSurgeon = false) {
        this.#name = name;
        this.#experience = experience;
        this.#isSurgeon = isSurgeon;
    }

    get name() {
        return this.#name;
    }

    get experience() {
        return this.#experience;
    }

    get isSurgeon() {
        return this.#isSurgeon;
    }

    set name(value) {
        this.#name = value;
    }

    set experience(value) {
        if (value >= 0) this.#experience = value;
    }

    set isSurgeon(value) {
        this.#isSurgeon = Boolean(value);
    }

    show() {
        return `Имя: ${this.#name}\nОпыт: ${this.#experience} лет\nХирург: ${this.#isSurgeon ? "Да" : "Нет"}`;
    }

    delete() {
        this.#name = null;
        this.#experience = null;
        this.#isSurgeon = null;
        return "Экземпляр врача удалён.";
    }

    copy() {
        return this;
    }

    #performSurgery() {
        this.#isSurgeon = true;
    }

    tryPerformSurgery() {
        this.#performSurgery();
    }

    static clone(originalDoctor) {
        return new Doctor(originalDoctor.name, originalDoctor.experience, originalDoctor.isSurgeon);
    }
}
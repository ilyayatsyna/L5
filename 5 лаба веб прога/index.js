import { Surgeon } from "./surgeon.js";

document.addEventListener("DOMContentLoaded", () => {
    const outputDiv = document.getElementById("output");

    function display(message) {
        const div = document.createElement("div");
        div.style.padding = "10px";
        div.style.margin = "10px";
        div.style.border = "1px solid #3498db";
        div.style.borderRadius = "5px";
        div.style.backgroundColor = "#ecf0f1";
        div.style.whiteSpace = "pre-line";
        div.textContent = message;
        outputDiv.appendChild(div);
    }

    const surgeons = [
        new Surgeon("Иванов Петр Сергеевич", 15, true, "Кардиохирургия"),
        new Surgeon("Смирнова Анна Владимировна", 8, false, "Нейрохирургия")
    ];

    display("🏥 Информация о хирургах:");

    surgeons.forEach((surgeon, i) => {
        display(`Хирург №${i + 1}:\n${surgeon.show()}`);
    });

    display("🔧 Демонстрация методов:");

    // Демонстрация геттеров
    display(`Геттер имени: ${surgeons[0].name}`);
    display(`Геттер специализации: ${surgeons[0].specialization}`);

    // Демонстрация сеттеров
    surgeons[0].specialization = "Общая хирургия";
    display(`После сеттера специализации: ${surgeons[0].specialization}`);

    // Демонстрация копирования
    const copiedSurgeon = surgeons[1].copy();
    display(`Метод copy:\n${copiedSurgeon.show()}`);

    // Демонстрация статичного метода clone
    const clonedSurgeon = Surgeon.clone(surgeons[0]);
    display(`Статичный метод clone:\n${clonedSurgeon.show()}`);

    // Проверка идентичности
    display(`Проверка surgeons[0] === clonedSurgeon: ${surgeons[0] === clonedSurgeon ? 'true' : 'false'} (должно быть false)`);
});
/* 
  Métodos de exibição e filtragem de cursos.
*/

import { Component, OnInit } from "@angular/core";

import { Course } from "./course";

@Component({
  selector: "course-list",
  templateUrl: "./course.list.component.html"
})
export class CourseListComponent {
  courses: Course[] = [
    {
      id: 1,
      name: "Angular: CLI",
      description:
        "Neste curso, os alunos irão obter um grande conhecimento nos principais recursos do CLI.",
      releaseDate: "November 4, 2019",
      code: "XLF-1212",
      rating: 3,
      price: 12.99
    },
    {
      id: 2,
      name: "Angular: Forms",
      description:
        "Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Forms.",
      releaseDate: "November 4, 2019",
      code: "DWQ-3412",
      rating: 3.5,
      price: 24.99
    },
    {
      id: 3,
      name: "Angular: HTTP",
      description:
        "Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de HTTP.",
      releaseDate: "November 8, 2019",
      code: "QPL-0913",
      rating: 4.0,
      price: 36.99
    },
    {
      id: 4,
      name: "Angular: Router",
      description:
        "Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis no módulo de Router.",
      releaseDate: "November 16, 2019",
      code: "OHP-1095",
      rating: 4.5,
      price: 46.99
    },
    {
      id: 5,
      name: "Angular: Animations",
      description:
        "Neste curso, os alunos irão obter um conhecimento aprofundado sobre os recursos disponíveis sobre Animation.",
      releaseDate: "November 25, 2019",
      code: "PWY-9381",
      rating: 5,
      price: 56.99
    }
  ];
}

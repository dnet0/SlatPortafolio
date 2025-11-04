export interface CoursesDTO {
    title: string;
    data:  Datum[];
}

export interface Datum {
    title:       string;
    institution: string;
    date:        string;
    focus:       string;
}

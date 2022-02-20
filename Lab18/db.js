import { Auditorium, AuditoriumType, Faculty, Pulpit, Subject, } from './entities.js';

export class DB {

    static async createFaculty(facultyCreateData) {
        const doesFacultyExist = (await Faculty.findByPk(facultyCreateData.faculty)) !== null;

        if (!doesFacultyExist) {
            return Faculty.create(facultyCreateData);
        } else {
            throw new Error('Faculty does not exist');
        }
    }

    static async createPulpit(pulpitCreateData) {
        const doesPulpitExist = (await Pulpit.findByPk(pulpitCreateData.pulpit)) !== null;

        if (!doesPulpitExist) {
            const doesFacultyExist = (await Faculty.findByPk(pulpitCreateData.faculty)) !== null;

            if (doesFacultyExist) {
                return Pulpit.create(pulpitCreateData);
            } else {
                throw new Error('Faculty does not exist');
            }
        } else {
            throw new Error('Pulpit already exists');
        }
    }

    static async createSubject(subjectCreateData) {
        const doesSubjectExist = (await Subject.findByPk(subjectCreateData.subject)) !== null;

        if (!doesSubjectExist) {
            const doesPulpitExist = (await Pulpit.findByPk(subjectCreateData.pulpit)) !== null;

            if (doesPulpitExist) {
                return Subject.create(subjectCreateData);
            } else {
                throw new Error('Pulpit does not exist');
            }
        } else {
            throw new Error('Subject already exists');
        }
    }

    static async createAuditoriumType(auditoriumTypeCreateData) {
        const doesAuditoriumTypeExist = (await AuditoriumType.findByPk(auditoriumTypeCreateData.auditorium_type)) !== null;

        if (!doesAuditoriumTypeExist) {
            return AuditoriumType.create(auditoriumTypeCreateData);
        } else {
            throw new Error('Auditorium Type already exists');
        }
    }

    static async createAuditorium(auditoriumCreateData) {
        const doesAuditoriumExist = (await Auditorium.findByPk(auditoriumCreateData.auditorium)) !== null;

        if (!doesAuditoriumExist) {
            const doesAuditoriumTypeExist = (await AuditoriumType.findByPk(auditoriumCreateData.auditorium_type)) !== null;

            if (doesAuditoriumTypeExist) {
                return Auditorium.create(auditoriumCreateData);
            } else {
                throw new Error('Auditorium Type does not exist');
            }
        } else {
            throw new Error('Auditorium already exists');
        }
    }

    static async updateFaculty(facultyUpdateData) {
        const doesFacultyExist = (await Faculty.findByPk(facultyUpdateData.faculty)) !== null;

        if (doesFacultyExist) {
            return Faculty.update(facultyUpdateData, { where: { faculty: facultyUpdateData.faculty } });
        } else {
            throw new Error('Faculty does not exist');
        }
    }

    static async updatePulpit(pulpitUpdateData) {
        const doesPulpitExist = (await Pulpit.findByPk(pulpitUpdateData.pulpit)) !== null;

        if (doesPulpitExist) {
            const doesFacultyExist = (await Faculty.findByPk(pulpitUpdateData.faculty)) !== null;

            if (doesFacultyExist) {
                return Pulpit.update(pulpitUpdateData, { where: { pulpit: pulpitUpdateData.pulpit } });
            } else {
                throw new Error('Faculty does not exist');
            }
        } else {
            throw new Error('Pulpit does not exist');
        }
    }

    static async updateSubject(subjectUpdateData) {
        const doesSubjectExist = (await Subject.findByPk(subjectUpdateData.subject)) !== null;

        if (doesSubjectExist) {
            const doesPulpitExist = (await Pulpit.findByPk(subjectUpdateData.pulpit)) !== null;

            if (doesPulpitExist) {
                return Subject.update(subjectUpdateData, { where: { subject: subjectUpdateData.subject } });
            } else {
                throw new Error('Pulpit does not exist');
            }
        } else {
            throw new Error('Subject does not exist');
        }
    }

    static async updateAuditoriumType(auditoriumTypeUpdateData) {
        const doesAuditoriumTypeExist = (await AuditoriumType.findByPk(auditoriumTypeUpdateData.auditorium_type)) !== null;

        if (doesAuditoriumTypeExist) {
            return AuditoriumType.update(auditoriumTypeUpdateData, { where: { auditorium_type: auditoriumTypeUpdateData.auditorium_type } });
        } else {
            throw new Error('Auditorium Type does not exist');
        }
    }

    static async updateAuditorium(auditoriumUpdateData) {
        const doesAuditoriumExist = (await Auditorium.findByPk(auditoriumUpdateData.auditorium)) !== null;

        if (doesAuditoriumExist) {
            const doesAuditoriumTypeExist = (await AuditoriumType.findByPk(auditoriumUpdateData.auditorium_type)) !== null;

            if (doesAuditoriumTypeExist) {
                return Auditorium.update(auditoriumUpdateData, { where: { auditorium: auditoriumUpdateData.auditorium } });


            } else {
                throw new Error('Auditorium Type does not exist');
            }
        } else {
            throw new Error('Auditorium does not exist');
        }
    }

    static async deleteFaculty(facultyPK) {
        return Faculty.findByPk(facultyPK)
            .then(faculty => {
                if (faculty) {
                    return Faculty.destroy({ where: { faculty: facultyPK } })
                        .then(() => faculty);
                } else {
                    throw new Error('Faculty does not exist');
                }
            });
    }

    static async deletePulpit(pulpitPK) {
        return Pulpit.findByPk(pulpitPK)
            .then(pulpit => {
                if (pulpit) {
                    return Pulpit.destroy({ where: { pulpit: pulpitPK } })
                        .then(() => pulpit);
                } else {
                    throw new Error('Pulpit does not exist');
                }
            });
    }

    static async deleteSubject(subjectPK) {
        return Subject.findByPk(subjectPK)
            .then(subject => {
                if (subject) {
                    return Subject.destroy({ where: { subject: subjectPK } })
                        .then(() => subject);
                } else {
                    throw new Error('Subject does not exist');
                }
            });
    }

    static async deleteAuditoriumType(auditoriumTypePK) {
        return AuditoriumType.findByPk(auditoriumTypePK)
            .then(auditoriumType => {
                if (auditoriumType) {
                    return AuditoriumType.destroy({ where: { auditorium_type: auditoriumTypePK } })
                        .then(() => auditoriumType);
                } else {
                    throw new Error('Auditorium Type does not exist');
                }
            });
    }

    static async deleteAuditorium(auditoriumPK) {
        return Auditorium.findByPk(auditoriumPK)
            .then(auditorium => {
                if (auditorium) {
                    return Auditorium.destroy({ where: { auditorium: auditoriumPK } })
                        .then(() => auditorium);
                } else {
                    throw new Error('Auditorium does not exist');
                }
            });
    }
}
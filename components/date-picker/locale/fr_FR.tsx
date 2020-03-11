import CalendarLocale from 'rc-picker/lib/locale/fr_FR';
import TimePickerLocale from '../../time-picker/locale/fr_FR';

// Merge into a locale object
const locale = {
  lang: {
    placeholder: 'Sélectionner une date',
    yearPlaceholder: 'Sélectionner une année',
    monthPlaceholder: 'Séléctionner un mois',
    weekPlaceholder: 'Séléctionne une semaine',
    rangePlaceholder: ['Date de début', 'Date de fin'],
    rangeYearPlaceholder: ['Année de début', 'Année de fin'],
    rangeMonthPlaceholder: ['Mois de début', 'Mois de fin'],
    rangeWeekPlaceholder: ['Semaine de début', 'Semaine de fin'],
    ...CalendarLocale,
  },
  timePickerLocale: {
    ...TimePickerLocale,
  },
};

// All settings at:
// https://github.com/ant-design/ant-design/issues/424

export default locale;

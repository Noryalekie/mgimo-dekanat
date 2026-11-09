/**
 * MGIMO Diplomat.Core — Interactive Application Engine
 * Architecture: Vertix & Bento Grid Floating Architecture
 */

// Mock Databases for Each Student Persona
const MOCK_DATA = {
  volkov: {
    profile: {
      id: 'volkov',
      name: 'Алексей Волков',
      fullName: 'Волков Алексей Дмитриевич',
      faculty: 'Факультет международных экономических отношений (МЭО)',
      shortFaculty: 'МЭО',
      specialty: 'Международные финансы и торговля',
      course: 4,
      group: 'МЭО-3',
      studentId: 'МЭО-2022-0481',
      avatar: null,
      gpa: 94.8,
      gradeLetter: 'A+',
      ects: 214,
      maxEcts: 240,
      attendance: 98.5,
      status: 'excellent',
      statusLabel: 'Отличник (A+)',
      statusColor: 'emerald',
      scholarship: 'Специальная стипендия им. Е.М. Примакова (18 500 ₽/мес)',
      email: 'a.volkov@my.mgimo.ru',
      phone: '+7 (916) 450-88-21',
      aiGreeting: 'Здравствуйте, Алексей! Ваш рейтинг 94.8 — наивысший на потоке МЭО. Не забудьте подать тезисы на Дипломатические чтения до пятницы.'
    },
    todaySchedule: [
      {
        id: 'v1',
        time: '09:00 — 10:20',
        pairNumber: 1,
        subject: 'Международные валютно-кредитные отношения',
        type: 'Лекция',
        teacher: 'д.э.н., проф. Платонова И.Н.',
        auditorium: 'Зал №1',
        building: 'Главный корпус, 2 этаж',
        isLive: false,
        statusBadge: null
      },
      {
        id: 'v2',
        time: '10:30 — 11:50',
        pairNumber: 2,
        subject: 'Дипломатический протокол и этикет',
        type: 'Семинар',
        teacher: 'Чрезвычайный и Полномочный Посланник Торкунов А.В.',
        auditorium: 'Ауд. 3144',
        building: 'Новый учебный корпус, 3 этаж',
        isLive: true,
        statusBadge: 'Идет сейчас'
      },
      {
        id: 'v3',
        time: '12:30 — 13:50',
        pairNumber: 3,
        subject: 'Первый иностранный язык (Английский — дипломатический перевод)',
        type: 'Языковая группа',
        teacher: 'доц. Смирнова Е.А.',
        auditorium: 'Ауд. 4118 → Зал Дипломатии',
        building: 'Корпус языковых кафедр, 4 этаж',
        isLive: false,
        statusBadge: 'Замена ауд.'
      },
      {
        id: 'v4',
        time: '14:00 — 15:20',
        pairNumber: 4,
        subject: 'Право Всемирной торговой организации (ВТО)',
        type: 'Семинар',
        teacher: 'к.ю.н. Воробьев М.С.',
        auditorium: 'Онлайн (МГИМО СДО)',
        building: 'Дистанционно (Zoom ID: 842 192)',
        isLive: false,
        statusBadge: 'Онлайн'
      }
    ],
    weekSchedule: [
      { day: 'Вторник, 10 ноя', classes: ['09:00 Мировые финансовые рынки (Лекция)', '10:30 Французский язык (Языковая группа)', '12:30 Внешнеэкономическая безопасность'] },
      { day: 'Среда, 11 ноя', classes: ['10:30 Макроэкономическое прогнозирование (Семинар)', '12:30 Дипломатический протокол'] },
      { day: 'Четверг, 12 ноя', classes: ['09:00 Экономика стран БРИКС (Лекция)', '10:30 Английский язык (Дипломная аналитика)', '14:00 Научный семинар МЭО'] },
      { day: 'Пятница, 13 ноя', classes: ['10:30 Международное торговое право (Зачетная предзащита)', '12:30 Консультация по диплому'] }
    ],
    examSchedule: [
      { date: '15 января 2027', time: '10:00', subject: 'Международные валютно-кредитные отношения', room: 'Зал Ученого совета', type: 'Экзамен (письменный)' },
      { date: '21 января 2027', time: '11:00', subject: 'Дипломатический протокол и этикет', room: 'Ауд. 3144', type: 'Экзамен (устный)' },
      { date: '26 января 2027', time: '09:00', subject: 'Первый иностранный язык (Английский)', room: 'Ауд. 4118', type: 'Госэкзамен' }
    ],
    brsSubjects: [
      {
        id: 'b1',
        title: 'Международные валютно-кредитные отношения',
        points: 96,
        grade: 'A',
        riskLevel: 'safe',
        seminars: 29,
        maxSeminars: 30,
        tests: 28,
        maxTests: 30,
        attendance: 10,
        maxAttendance: 10,
        exam: 29,
        maxExam: 30,
        recommendation: 'Автомат гарантирован. Рекомендуется выступление на пленарной сессии МЭО.'
      },
      {
        id: 'b2',
        title: 'Дипломатический протокол и этикет',
        points: 92,
        grade: 'A',
        riskLevel: 'safe',
        seminars: 28,
        maxSeminars: 30,
        tests: 26,
        maxTests: 30,
        attendance: 10,
        maxAttendance: 10,
        exam: 28,
        maxExam: 30,
        recommendation: 'Отличный уровень. Эссе по протоколу принято без замечаний.'
      },
      {
        id: 'b3',
        title: 'Первый иностранный язык (Английский)',
        points: 95,
        grade: 'A',
        riskLevel: 'safe',
        seminars: 30,
        maxSeminars: 30,
        tests: 28,
        maxTests: 30,
        attendance: 9,
        maxAttendance: 10,
        exam: 28,
        maxExam: 30,
        recommendation: 'Уровень владения C2 (Diplomatic Mastery). Рекомендован к дипломатической стажировке.'
      },
      {
        id: 'b4',
        title: 'Право Всемирной торговой организации (ВТО)',
        points: 84,
        grade: 'B',
        riskLevel: 'warning',
        seminars: 24,
        maxSeminars: 30,
        tests: 23,
        maxTests: 30,
        attendance: 9,
        maxAttendance: 10,
        exam: 28,
        maxExam: 30,
        recommendation: 'Зона внимания: сдайте финальный меморандум до пятницы, чтобы поднять балл до категории А.'
      }
    ],
    certificates: [
      {
        id: 'c1',
        title: 'Справка об обучении с гербовой ЭЦП (Academic Certificate)',
        requestDate: '09 ноября 2026, 11:30',
        expectedDate: '09 ноября 2026, 17:00',
        status: 'signing', // submitted | processing | signing | ready
        statusStep: 3,
        statusText: 'На электронной подписи замдекана',
        purpose: 'В Посольство Французской Республики для стажировки',
        hasQr: true,
        documentNumber: 'МГИМО-ЭДО-2026/8941',
        recipient: 'Консульский отдел Посольства Франции в РФ',
        issuer: 'Деканат факультета МЭО МГИМО МИД России',
        signer: 'Заместитель декана по учебной работе доц. Смирнов А.П.'
      },
      {
        id: 'c2',
        title: 'Выписка из экзаменационной ведомости (Transcript of Records)',
        requestDate: '05 ноября 2026, 14:15',
        expectedDate: '06 ноября 2026, 12:00',
        status: 'ready',
        statusStep: 4,
        statusText: 'Готово к скачиванию / Выдано',
        purpose: 'По месту требования (Грантовый комитет)',
        hasQr: true,
        documentNumber: 'МГИМО-ТР-2026/1029',
        recipient: 'Стипендиальный комитет им. Е.М. Примакова',
        issuer: 'Управление академической политики МГИМО',
        signer: 'Начальник УАП д.полит.н. Васильев К.В.'
      }
    ],
    notifications: [
      {
        id: 'n1',
        title: 'Замена аудитории по английскому языку',
        sender: 'Кафедра английского языка №1',
        time: '35 минут назад',
        category: 'urgent',
        text: 'Внимание студентам группы МЭО-3: пара 12:30 перенесена из ауд. 4118 в Зал Дипломатии в связи с открытой лекцией посла.',
        read: false
      },
      {
        id: 'n2',
        title: 'Справка №8941 передана на подпись',
        sender: 'Канцелярия деканата МЭО',
        time: '2 часа назад',
        category: 'certificates',
        text: 'Ваша справка для Посольства Франции сформирована и находится на финальной верификации ЭЦП.',
        read: false
      },
      {
        id: 'n3',
        title: 'Прием тезисов на международную конференцию',
        sender: 'Научное студенческое общество (НСО)',
        time: 'Вчера, 16:40',
        category: 'academic',
        text: 'Напоминаем, что 15 ноября завершается регистрация участников секции Международных финансов.',
        read: true
      }
    ]
  },

  romanova: {
    profile: {
      id: 'romanova',
      name: 'София Романова',
      fullName: 'Романова София Андреевна',
      faculty: 'Факультет международной журналистики (МЖ)',
      shortFaculty: 'МЖ',
      specialty: 'Связи с общественностью и медиакоммуникации',
      course: 2,
      group: 'МЖ-02',
      studentId: 'МЖ-2024-0192',
      avatar: null,
      gpa: 62.4,
      gradeLetter: 'E / Риск',
      ects: 78,
      maxEcts: 120,
      attendance: 74.0,
      status: 'risk',
      statusLabel: 'Зона внимания / Риск',
      statusColor: 'amber',
      scholarship: 'Без стипендии (Риск академической задолженности)',
      email: 's.romanova@my.mgimo.ru',
      phone: '+7 (903) 771-49-10',
      aiGreeting: 'София, внимание! По предмету «Второй иностранный язык (Испанский)» у вас 58 баллов из 100. Tutor AI активировал персональный план спасения сессии.'
    },
    todaySchedule: [
      {
        id: 'r1',
        time: '10:30 — 11:50',
        pairNumber: 2,
        subject: 'Второй иностранный язык (Испанский) — Рубежный коллоквиум',
        type: 'Языковая группа',
        teacher: 'ст. преп. Мартинес-Родригес М.Х.',
        auditorium: 'Ауд. 2018',
        building: 'Новый корпус, 2 этаж',
        isLive: true,
        statusBadge: 'Идет сейчас'
      },
      {
        id: 'r2',
        time: '12:30 — 13:50',
        pairNumber: 3,
        subject: 'Теория и практика связей с общественностью',
        type: 'Семинар',
        teacher: 'доц. Крылова О.В.',
        auditorium: 'Ауд. 1039',
        building: 'Главный корпус, 1 этаж',
        isLive: false,
        statusBadge: null
      },
      {
        id: 'r3',
        time: '14:00 — 15:20',
        pairNumber: 4,
        subject: 'История зарубежной литературы XX века',
        type: 'Лекция',
        teacher: 'проф. Мельников В.Г.',
        auditorium: 'Зал №3',
        building: 'Главный корпус',
        isLive: false,
        statusBadge: null
      }
    ],
    weekSchedule: [
      { day: 'Вторник, 10 ноя', classes: ['10:30 Медиапланирование (Семинар)', '12:30 Испанский язык (Дополнительный разбор)'] },
      { day: 'Среда, 11 ноя', classes: ['09:00 Психология массовых коммуникаций', '10:30 Английский язык для журналистов'] },
      { day: 'Четверг, 12 ноя', classes: ['14:00 Коллоквиум по испанской грамматике (Пересдача рубежа)'] }
    ],
    examSchedule: [
      { date: '12 января 2027', time: '09:00', subject: 'Второй иностранный язык (Испанский)', room: 'Ауд. 2018', type: 'Экзамен (Критический)' },
      { date: '18 января 2027', time: '11:00', subject: 'Связи с общественностью', room: 'Ауд. 1039', type: 'Зачет с оценкой' }
    ],
    brsSubjects: [
      {
        id: 'r_b1',
        title: 'Второй иностранный язык (Испанский)',
        points: 58,
        grade: 'F',
        riskLevel: 'danger',
        seminars: 16,
        maxSeminars: 30,
        tests: 18,
        maxTests: 30,
        attendance: 6,
        maxAttendance: 10,
        exam: 18,
        maxExam: 30,
        recommendation: 'Критический риск недопуска! Не хватает 2 баллов до минимума (60). Сдайте лексический минимум до 12 ноября.'
      },
      {
        id: 'r_b2',
        title: 'Теория и практика связей с общественностью',
        points: 68,
        grade: 'E',
        riskLevel: 'warning',
        seminars: 20,
        maxSeminars: 30,
        tests: 21,
        maxTests: 30,
        attendance: 7,
        maxAttendance: 10,
        exam: 20,
        maxExam: 30,
        recommendation: 'Пограничная зона. Для получения категории D/C подготовьте групповой PR-проект.'
      },
      {
        id: 'r_b3',
        title: 'История зарубежной журналистики',
        points: 75,
        grade: 'C',
        riskLevel: 'safe',
        seminars: 24,
        maxSeminars: 30,
        tests: 22,
        maxTests: 30,
        attendance: 8,
        maxAttendance: 10,
        exam: 21,
        maxExam: 30,
        recommendation: 'Стабильный результат. Зачет будет выставлен автоматически.'
      }
    ],
    certificates: [
      {
        id: 'rc1',
        title: 'Заявление на индивидуальный график сдачи коллоквиума',
        requestDate: '08 ноября 2026, 17:00',
        expectedDate: '10 ноября 2026, 15:00',
        status: 'processing',
        statusStep: 2,
        statusText: 'На согласовании на кафедре романских языков',
        purpose: 'Ликвидация академической задолженности по болезни',
        hasQr: true,
        documentNumber: 'МГИМО-ЗАЯВ-2026/4102',
        recipient: 'Заведующий кафедрой испанского языка проф. Иванов С.А.',
        issuer: 'Деканат факультета МЖ МГИМО',
        signer: 'Инспектор курса факультета МЖ Морозова Е.В.'
      }
    ],
    notifications: [
      {
        id: 'rn1',
        title: 'Внимание: Долг по рубежному контролю (Испанский)',
        sender: 'Кафедра испанского языка',
        time: 'Сегодня, 08:30',
        category: 'urgent',
        text: 'Коллоквиум состоится сегодня в ауд. 2018. При неявке без медицинской справки выставляется 0 баллов.',
        read: false
      },
      {
        id: 'rn2',
        title: 'AI-План спасения сессии готов',
        sender: 'Tutor AI Советник',
        time: 'Вчера, 22:00',
        category: 'academic',
        text: 'Сформирован персональный таймлайн: +4 балла за словарный тест, +5 баллов за доклад до пятницы.',
        read: false
      }
    ]
  },

  dubois: {
    profile: {
      id: 'dubois',
      name: 'Жан-Люк Дюбуа',
      fullName: 'Дюбуа Жан-Люк Марсель (Jean-Luc Dubois)',
      faculty: 'Международный институт энергетической политики (МИЭП)',
      shortFaculty: 'МИЭП',
      specialty: 'Международный энергетический бизнес и геополитика',
      course: 1,
      group: 'МИЭП-М1',
      studentId: 'INT-2025-0012',
      avatar: null,
      gpa: 86.5,
      gradeLetter: 'B+',
      ects: 32,
      maxEcts: 60,
      attendance: 94.0,
      status: 'international',
      statusLabel: 'Иностранный студент (Франция)',
      statusColor: 'blue',
      scholarship: 'Межправительственный грант РФ-Франция',
      email: 'jl.dubois@my.mgimo.ru',
      phone: '+7 (999) 321-12-88',
      aiGreeting: 'Bienvenue, Jean-Luc! Ваше визовое ходатайство готово. Не забудьте забрать регистрационный талон в Международном управлении (к. 1030).'
    },
    todaySchedule: [
      {
        id: 'd1',
        time: '09:00 — 10:20',
        pairNumber: 1,
        subject: 'Мировые рынки нефти и газа (World Energy Markets)',
        type: 'Лекция',
        teacher: 'член-корр. РАН Салыгин В.И.',
        auditorium: 'Ауд. 4124',
        building: 'МИЭП, 4 этаж',
        isLive: false,
        statusBadge: null
      },
      {
        id: 'd2',
        time: '10:30 — 11:50',
        pairNumber: 2,
        subject: 'Русский язык как иностранный (Дипломатический дискурс)',
        type: 'Языковая группа',
        teacher: 'доц. Афанасьева Н.Д.',
        auditorium: 'Ауд. 2110',
        building: 'Новый корпус',
        isLive: true,
        statusBadge: 'Идет сейчас'
      },
      {
        id: 'd3',
        time: '14:00 — 15:20',
        pairNumber: 4,
        subject: 'Энергетическая дипломатия стран ОПЕК+',
        type: 'Семинар',
        teacher: 'к.и.н. Руденко А.В.',
        auditorium: 'Зал заседаний МИЭП',
        building: 'Главный корпус',
        isLive: false,
        statusBadge: null
      }
    ],
    weekSchedule: [
      { day: 'Вторник, 10 ноя', classes: ['10:30 Геополитика возобновляемой энергетики', '12:30 Русский язык как иностранный'] },
      { day: 'Среда, 11 ноя', classes: ['14:00 Международное энергетическое право'] }
    ],
    examSchedule: [
      { date: '16 января 2027', time: '10:00', subject: 'Мировые рынки нефти и газа', room: 'Ауд. 4124', type: 'Экзамен (English)' }
    ],
    brsSubjects: [
      {
        id: 'd_b1',
        title: 'Мировые рынки нефти и газа',
        points: 91,
        grade: 'A',
        riskLevel: 'safe',
        seminars: 28,
        maxSeminars: 30,
        tests: 27,
        maxTests: 30,
        attendance: 10,
        maxAttendance: 10,
        exam: 26,
        maxExam: 30,
        recommendation: 'Excellent analytical work. Case study on LNG transit awarded top marks.'
      },
      {
        id: 'd_b2',
        title: 'Русский язык как иностранный (B2/C1)',
        points: 82,
        grade: 'B',
        riskLevel: 'safe',
        seminars: 25,
        maxSeminars: 30,
        tests: 24,
        maxTests: 30,
        attendance: 9,
        maxAttendance: 10,
        exam: 24,
        maxExam: 30,
        recommendation: 'Хороший прогресс в дипломатической лексике. Рекомендуется больше устной практики.'
      }
    ],
    certificates: [
      {
        id: 'dc1',
        title: 'Визовое ходатайство (Visa Extension Letter to МВД РФ)',
        requestDate: '02 ноября 2026, 10:00',
        expectedDate: '08 ноября 2026, 16:00',
        status: 'ready',
        statusStep: 4,
        statusText: 'Готово к выдаче в к. 1030',
        purpose: 'Продление учебной многократной визы на 1 год',
        hasQr: true,
        documentNumber: 'МГИМО-ВИЗА-2026/0514',
        recipient: 'Управление по вопросам миграции ГУ МВД России по г. Москве',
        issuer: 'Международное управление МГИМО МИД России',
        signer: 'Начальник Международного управления Андреев И.В.'
      }
    ],
    notifications: [
      {
        id: 'dn1',
        title: 'Визовое ходатайство подписано',
        sender: 'Международный протокольный отдел',
        time: 'Вчера, 14:15',
        category: 'certificates',
        text: 'Пакет документов для миграционной службы готов. Получите оригиналы в кабинете 1030 с 14:00 до 17:00.',
        read: false
      }
    ]
  },

  belova: {
    profile: {
      id: 'belova',
      name: 'Екатерина Белова',
      fullName: 'Белова Екатерина Дмитриевна',
      faculty: 'Международно-правовой факультет (МП)',
      shortFaculty: 'МП',
      specialty: 'Международное публичное право',
      course: 3,
      group: 'МП-04',
      studentId: 'МП-2023-0315',
      avatar: null,
      gpa: 89.2,
      gradeLetter: 'B+',
      ects: 160,
      maxEcts: 180,
      attendance: 96.0,
      status: 'headman',
      statusLabel: 'Староста группы МП-04',
      statusColor: 'purple',
      scholarship: 'Академическая стипендия МГИМО (12 000 ₽/мес)',
      email: 'e.belova@my.mgimo.ru',
      phone: '+7 (915) 880-19-45',
      aiGreeting: 'Здравствуйте, Екатерина! Как старосте МП-04, вам доступен реестр посещаемости группы и экстренная связь с инспектором курса.'
    },
    todaySchedule: [
      {
        id: 'be1',
        time: '09:00 — 10:20',
        pairNumber: 1,
        subject: 'Международное гуманитарное право',
        type: 'Лекция',
        teacher: 'д.ю.н., проф. Малеев Ю.Н.',
        auditorium: 'Зал №5',
        building: 'Новый корпус',
        isLive: false,
        statusBadge: null
      },
      {
        id: 'be2',
        time: '10:30 — 11:50',
        pairNumber: 2,
        subject: 'Право международных договоров',
        type: 'Семинар',
        teacher: 'к.ю.н. Сидоров В.В.',
        auditorium: 'Ауд. 312',
        building: 'Главный корпус',
        isLive: true,
        statusBadge: 'Идет сейчас'
      }
    ],
    weekSchedule: [
      { day: 'Вторник, 10 ноя', classes: ['10:30 Международный арбитраж', '12:30 Юридический английский'] }
    ],
    examSchedule: [
      { date: '14 января 2027', time: '10:00', subject: 'Международное гуманитарное право', room: 'Зал №5', type: 'Экзамен' }
    ],
    brsSubjects: [
      {
        id: 'be_b1',
        title: 'Международное гуманитарное право',
        points: 92,
        grade: 'A',
        riskLevel: 'safe',
        seminars: 29,
        maxSeminars: 30,
        tests: 27,
        maxTests: 30,
        attendance: 10,
        maxAttendance: 10,
        exam: 26,
        maxExam: 30,
        recommendation: 'Образцовая подготовка. Рекомендовано участие в модельном суде им. Джессопа.'
      }
    ],
    certificates: [],
    notifications: [
      {
        id: 'ben1',
        title: 'Сбор ведомостей посещаемости МП-04',
        sender: 'Куратор 3 курса МП',
        time: 'Сегодня, 09:10',
        category: 'urgent',
        text: 'Напоминаем старостам о необходимости сдать электронный рапортички за октябрь до 12 ноября.',
        read: false
      }
    ]
  }
};

// Global App Authentication Helpers
function getAuthenticatedUser() {
  return localStorage.getItem('mgimo_remember_user') || null;
}

function isUserAuthenticated() {
  return !!AppState.isAuthenticatedInSession || !!localStorage.getItem('mgimo_remember_user');
}
window.isUserAuthenticated = isUserAuthenticated;

// Global App State
const AppState = {
  currentProfileId: getAuthenticatedUser() || 'volkov',
  isAuthenticatedInSession: !!getAuthenticatedUser(),
  currentTab: 'overview', // 'overview' | 'schedule' | 'brs' | 'certificates' | 'assistant' | 'notifications'
  theme: localStorage.getItem('mgimo_theme') || 'light',
  scheduleTab: 'today', // 'today' | 'week' | 'exams'
  scheduleFilter: 'all', // 'all' | 'lecture' | 'seminar' | 'language'
  brsFilter: 'all', // 'all' | 'danger'
  unreadCount: 0,
  chatMessages: [],
  isMobileMenuOpen: false
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  setupEventListeners();
  
  // Clean up any legacy test keys & bad avatar data
  localStorage.removeItem('mgimo_auth_user');
  localStorage.removeItem('mgimo_session');
  localStorage.removeItem('mgimo_profile');
  sessionStorage.removeItem('mgimo_auth_user');
  ['volkov', 'romanova', 'dubois', 'belova'].forEach(id => {
    const val = localStorage.getItem('mgimo_custom_avatar_' + id);
    if (val === 'test_avatar_data' || val === 'null') {
      localStorage.removeItem('mgimo_custom_avatar_' + id);
    }
  });

  const rememberedUser = localStorage.getItem('mgimo_remember_user');
  if (rememberedUser && MOCK_DATA[rememberedUser]) {
    // User explicitly checked "Remember Me" previously
    AppState.currentProfileId = rememberedUser;
    AppState.isAuthenticatedInSession = true;
    renderApp();
  } else {
    // No "Remember Me" set: require explicit login on load
    AppState.isAuthenticatedInSession = false;
    renderApp();
    openAuthModal(true);
  }
  initLucide();
});

// Theme Management
function initTheme() {
  if (AppState.theme === 'dark') {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
}

function toggleTheme() {
  AppState.theme = AppState.theme === 'light' ? 'dark' : 'light';
  localStorage.setItem('mgimo_theme', AppState.theme);
  initTheme();
  updateThemeIcons();
  initLucide();
}

function updateThemeIcons() {
  const sunBtns = document.querySelectorAll('.theme-btn-sun');
  const moonBtns = document.querySelectorAll('.theme-btn-moon');
  if (AppState.theme === 'dark') {
    sunBtns.forEach(b => b.classList.remove('text-amber-500', 'bg-white', 'shadow-sm'));
    moonBtns.forEach(b => b.classList.add('text-blue-400', 'bg-slate-800', 'shadow-sm'));
  } else {
    sunBtns.forEach(b => b.classList.add('text-amber-500', 'bg-white', 'shadow-sm'));
    moonBtns.forEach(b => b.classList.remove('text-blue-400', 'bg-slate-800', 'shadow-sm'));
  }
}

// Avatar & Initials Management
function getStudentInitials(fullName = '') {
  if (!fullName) return 'СТ';
  const parts = fullName.trim().split(/\s+/);
  if (parts.length >= 2) {
    return (parts[0][0] + parts[1][0]).toUpperCase();
  }
  return parts[0].slice(0, 2).toUpperCase();
}

function getStudentAvatar(studentId) {
  const val = localStorage.getItem('mgimo_custom_avatar_' + studentId);
  if (!val || val === 'test_avatar_data' || val === 'null' || (!val.startsWith('data:image/') && !val.startsWith('http'))) {
    return null;
  }
  return val;
}

function triggerAvatarUpload() {
  const input = document.getElementById('student-avatar-file-input');
  if (input) {
    input.value = '';
    input.click();
  }
}

// Compress avatar via Canvas down to crisp ~180x180 JPEG (~10-15KB)
// 100% reliable hardware-accelerated on iOS Safari, Android, and Desktop
function compressAvatar(file, maxDim = 180, quality = 0.80) {
  return new Promise((resolve) => {
    // 1. Try native createImageBitmap (iOS 15+, Mac Safari, Chrome)
    if (typeof createImageBitmap === 'function') {
      createImageBitmap(file).then(bitmap => {
        try {
          const canvas = document.createElement('canvas');
          let w = bitmap.width;
          let h = bitmap.height;
          if (w > h) {
            if (w > maxDim) {
              h = Math.round((h * maxDim) / w);
              w = maxDim;
            }
          } else {
            if (h > maxDim) {
              w = Math.round((w * maxDim) / h);
              h = maxDim;
            }
          }
          canvas.width = w;
          canvas.height = h;
          const ctx = canvas.getContext('2d');
          ctx.drawImage(bitmap, 0, 0, w, h);
          resolve(canvas.toDataURL('image/jpeg', quality));
        } catch (_) {
          fallbackCompress(file, maxDim, quality, resolve);
        }
      }).catch(() => {
        fallbackCompress(file, maxDim, quality, resolve);
      });
      return;
    }
    fallbackCompress(file, maxDim, quality, resolve);
  });
}

function fallbackCompress(file, maxDim, quality, resolve) {
  const blobUrl = URL.createObjectURL(file);
  const img = new Image();
  img.onload = function() {
    URL.revokeObjectURL(blobUrl);
    try {
      const canvas = document.createElement('canvas');
      let w = img.width;
      let h = img.height;
      if (w > h) {
        if (w > maxDim) {
          h = Math.round((h * maxDim) / w);
          w = maxDim;
        }
      } else {
        if (h > maxDim) {
          w = Math.round((w * maxDim) / h);
          h = maxDim;
        }
      }
      canvas.width = w;
      canvas.height = h;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(img, 0, 0, w, h);
      resolve(canvas.toDataURL('image/jpeg', quality));
    } catch (_) {
      resolve(null);
    }
  };
  img.onerror = function() {
    URL.revokeObjectURL(blobUrl);
    resolve(null);
  };
  img.src = blobUrl;
}

async function handleStudentAvatarUpload(event) {
  const file = event.target && event.target.files && event.target.files[0];
  if (!file) return;

  if (file.size > 15 * 1024 * 1024) {
    showToast('⚠️ Размер фото не должен превышать 15 МБ');
    return;
  }

  showToast('⏳ Сохраняем фото профиля...');

  try {
    const compressedDataUrl = await compressAvatar(file);
    if (!compressedDataUrl) {
      showToast('⚠️ Не удалось прочитать изображение');
      return;
    }

    const student = getCurrentStudent();
    const studentId = student.profile.id;

    // Save directly to localStorage
    try {
      localStorage.setItem('mgimo_custom_avatar_' + studentId, compressedDataUrl);
    } catch (storageErr) {
      console.warn('localStorage set error, retrying:', storageErr);
      try {
        localStorage.removeItem('mgimo_custom_avatar_' + studentId);
        localStorage.setItem('mgimo_custom_avatar_' + studentId, compressedDataUrl);
      } catch (_) {}
    }

    // Refresh entire interface
    renderApp();

    const profileModal = document.getElementById('modal-profile');
    if (profileModal && !profileModal.classList.contains('hidden')) {
      openProfileModal();
    }
    const passModal = document.getElementById('modal-student-pass');
    if (passModal && !passModal.classList.contains('hidden')) {
      openStudentPassModal();
    }

    showToast('✓ Фото профиля успешно сохранено!');
  } catch (err) {
    console.error('Avatar upload error:', err);
    showToast('⚠️ Ошибка при обработке фото');
  }
}

function removeStudentAvatar() {
  const student = getCurrentStudent();
  const studentId = student.profile.id;

  // Remove from localStorage
  localStorage.removeItem('mgimo_custom_avatar_' + studentId);

  // Refresh entire interface
  renderApp();

  const profileModal = document.getElementById('modal-profile');
  if (profileModal && !profileModal.classList.contains('hidden')) {
    openProfileModal();
  }
  const passModal = document.getElementById('modal-student-pass');
  if (passModal && !passModal.classList.contains('hidden')) {
    openStudentPassModal();
  }

  showToast('✓ Фото удалено. Установлена стандартная аватарка');
}

// Current User Helpers
function getCurrentStudent() {
  return MOCK_DATA[AppState.currentProfileId] || MOCK_DATA.volkov;
}

// Profile Switcher (Jury Tool)
function switchStudentProfile(profileId) {
  if (!MOCK_DATA[profileId]) return;
  AppState.currentProfileId = profileId;
  if (localStorage.getItem('mgimo_remember_user')) {
    localStorage.setItem('mgimo_remember_user', profileId);
  }
  closeAllModals();
  renderApp();
  showToast(`Профиль переключен: ${getCurrentStudent().profile.name} (${getCurrentStudent().profile.shortFaculty})`);
}

// Tab Switching
function switchTab(tabId) {
  AppState.currentTab = tabId;
  
  // Update floating pills in header & left rail
  document.querySelectorAll('[data-nav-tab]').forEach(el => {
    const target = el.getAttribute('data-nav-tab');
    if (target === tabId) {
      el.classList.add('bg-slate-900', 'text-white', 'dark:bg-blue-600', 'shadow-sm');
      el.classList.remove('text-slate-600', 'dark:text-slate-400', 'hover:text-slate-900');
    } else {
      el.classList.remove('bg-slate-900', 'text-white', 'dark:bg-blue-600', 'shadow-sm');
      el.classList.add('text-slate-600', 'dark:text-slate-400', 'hover:text-slate-900');
    }
  });

  // Update Left rail icons
  document.querySelectorAll('[data-rail-tab]').forEach(el => {
    const target = el.getAttribute('data-rail-tab');
    if (target === tabId) {
      el.classList.add('bg-slate-900', 'text-white', 'dark:bg-blue-600');
      el.classList.remove('text-slate-500', 'dark:text-slate-400', 'hover:bg-slate-100');
    } else {
      el.classList.remove('bg-slate-900', 'text-white', 'dark:bg-blue-600');
      el.classList.add('text-slate-500', 'dark:text-slate-400', 'hover:bg-slate-100');
    }
  });

  // Update mobile bottom bar icons
  document.querySelectorAll('[data-mobile-tab]').forEach(el => {
    const target = el.getAttribute('data-mobile-tab');
    if (target === tabId) {
      el.classList.add('text-blue-600', 'dark:text-blue-400', 'font-semibold');
      el.classList.remove('text-slate-400', 'dark:text-slate-500');
    } else {
      el.classList.remove('text-blue-600', 'dark:text-blue-400', 'font-semibold');
      el.classList.add('text-slate-400', 'dark:text-slate-500');
    }
  });

  // Show/Hide Main Canvas Sections
  const screens = ['overview', 'schedule', 'brs', 'certificates', 'assistant', 'notifications'];
  screens.forEach(s => {
    const el = document.getElementById(`screen-${s}`);
    if (el) {
      if (s === tabId) {
        el.classList.remove('hidden');
        el.classList.add('animate-fadeIn');
      } else {
        el.classList.add('hidden');
      }
    }
  });

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Render Master UI
function renderApp() {
  const student = getCurrentStudent();
  const profile = student.profile;

  // Update Top Profile Capsules & Names
  const customAvatar = getStudentAvatar(profile.id);
  const initials = getStudentInitials(profile.name);

  const userAvatarEls = document.querySelectorAll('.user-avatar-img');
  userAvatarEls.forEach(img => {
    if (customAvatar) {
      img.src = customAvatar;
      img.alt = profile.name;
      img.classList.remove('hidden');
    } else {
      img.removeAttribute('src');
      img.classList.add('hidden');
    }
  });

  const userInitialsEls = document.querySelectorAll('.user-avatar-initials');
  userInitialsEls.forEach(span => {
    span.textContent = initials;
    if (customAvatar) {
      span.classList.add('hidden');
    } else {
      span.classList.remove('hidden');
    }
  });

  const userNameEls = document.querySelectorAll('.user-name-txt');
  userNameEls.forEach(el => {
    el.innerHTML = `<span class="sm:hidden">${profile.name.split(' ')[0]}</span><span class="hidden sm:inline">${profile.name}</span>`;
  });

  const userFacultyEls = document.querySelectorAll('.user-faculty-txt');
  userFacultyEls.forEach(el => { el.textContent = `${profile.shortFaculty} • ${profile.course} курс`; });

  // Update Unread Notification Counter
  const unreadCount = student.notifications.filter(n => !n.read).length;
  AppState.unreadCount = unreadCount;
  const notifBadgeEls = document.querySelectorAll('.notif-badge');
  notifBadgeEls.forEach(b => {
    if (unreadCount > 0) {
      b.textContent = unreadCount;
      b.classList.remove('hidden');
    } else {
      b.classList.add('hidden');
    }
  });

  // Render individual screen components
  renderOverviewScreen(student);
  renderScheduleScreen(student);
  renderBRSScreen(student);
  renderCertificatesScreen(student);
  renderAssistantScreen(student);
  renderNotificationsScreen(student);

  // Sync active tab
  switchTab(AppState.currentTab);
  updateThemeIcons();
  initLucide();
}

// ==========================================
// 1. SCREEN: OVERVIEW (Главный Дашборд)
// ==========================================
function renderOverviewScreen(student) {
  const p = student.profile;
  const screen = document.getElementById('screen-overview');
  if (!screen) return;

  const liveClass = student.todaySchedule.find(c => c.isLive) || student.todaySchedule[0];
  const activeCert = student.certificates[0];

  // Signature Accent Card theme: Alexey gets Royal Blue / Amber Honors card, Sofia gets Attention Rose / Amber, Dubois gets Sapphire International
  let accentCardHtml = '';
  if (p.status === 'excellent') {
    accentCardHtml = `
      <div class="accent-card-diplomat rounded-3xl p-6 sm:p-7 text-white flex flex-col justify-between shadow-lg relative overflow-hidden group h-full min-h-[250px]">
        <div class="relative z-10">
          <div class="flex items-center justify-between mb-3">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-semibold tracking-wide text-amber-300 border border-white/20">
              <i data-lucide="award" class="w-3.5 h-3.5"></i>
              Стипендиат МГИМО
            </span>
            <span class="text-xs font-mono bg-blue-900/40 px-2 py-0.5 rounded-full text-blue-200">Рейтинг #1</span>
          </div>
          <p class="text-xs text-blue-100 font-medium uppercase tracking-wider">Балльно-рейтинговый статус</p>
          <div class="flex items-baseline gap-2 mt-1">
            <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight">${p.gpa}</h2>
            <span class="text-sm font-bold text-amber-300">/ 100 (${p.gradeLetter})</span>
          </div>
          <p class="text-xs text-blue-100/90 mt-2 line-clamp-2">${p.scholarship}</p>
        </div>
        <div class="relative z-10 pt-4 flex items-center justify-between border-t border-white/15 mt-4">
          <button onclick="switchTab('brs')" class="text-xs font-semibold flex items-center gap-1.5 hover:text-amber-200 transition-colors">
            Подробная выписка БРС <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
          </button>
          <span class="text-[11px] bg-white/20 px-2 py-0.5 rounded-full font-mono">Автомат: 4/4</span>
        </div>
      </div>
    `;
  } else if (p.status === 'risk') {
    accentCardHtml = `
      <div class="accent-card-orange rounded-3xl p-6 sm:p-7 text-white flex flex-col justify-between shadow-lg relative overflow-hidden group h-full min-h-[250px]">
        <div class="relative z-10">
          <div class="flex items-center justify-between mb-3">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-semibold tracking-wide text-white border border-white/30">
              <i data-lucide="alert-triangle" class="w-3.5 h-3.5 text-yellow-300"></i>
              Зона академического риска
            </span>
            <span class="text-xs font-mono bg-black/20 px-2 py-0.5 rounded-full text-white">Долг: 1 предм.</span>
          </div>
          <p class="text-xs text-orange-100 font-medium uppercase tracking-wider">Текущий средний балл</p>
          <div class="flex items-baseline gap-2 mt-1">
            <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight">${p.gpa}</h2>
            <span class="text-sm font-bold text-orange-200">/ 100 (${p.gradeLetter})</span>
          </div>
          <p class="text-xs text-white/95 mt-2">Испанский язык: 58/100. Не хватает 2 баллов до допуска.</p>
        </div>
        <div class="relative z-10 pt-4 flex items-center justify-between border-t border-white/20 mt-4">
          <button onclick="openRescuePlanModal()" class="text-xs font-bold bg-white text-orange-600 px-3 py-1.5 rounded-full hover:bg-orange-50 transition-all flex items-center gap-1 shadow-sm">
            План спасения AI <i data-lucide="sparkles" class="w-3.5 h-3.5"></i>
          </button>
          <span class="text-[11px] text-white/90">Коллоквиум сегодня</span>
        </div>
      </div>
    `;
  } else {
    accentCardHtml = `
      <div class="accent-card-diplomat rounded-3xl p-6 sm:p-7 text-white flex flex-col justify-between shadow-lg relative overflow-hidden h-full min-h-[250px]">
        <div class="relative z-10">
          <div class="flex items-center justify-between mb-3">
            <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-semibold tracking-wide text-sky-200 border border-white/20">
              <i data-lucide="globe" class="w-3.5 h-3.5"></i>
              International Protocol
            </span>
            <span class="text-xs font-mono bg-blue-900/40 px-2 py-0.5 rounded-full text-blue-200">MIЭП • M1</span>
          </div>
          <p class="text-xs text-blue-100 font-medium uppercase tracking-wider">Рейтинг БРС / International GPA</p>
          <div class="flex items-baseline gap-2 mt-1">
            <h2 class="text-3xl sm:text-4xl font-extrabold tracking-tight">${p.gpa}</h2>
            <span class="text-sm font-bold text-sky-300">/ 100 (${p.gradeLetter})</span>
          </div>
          <p class="text-xs text-blue-100/90 mt-2">Визовый статус: Легален до 30 июня 2027 г.</p>
        </div>
        <div class="relative z-10 pt-4 flex items-center justify-between border-t border-white/15 mt-4">
          <button onclick="switchTab('certificates')" class="text-xs font-semibold flex items-center gap-1.5 hover:text-sky-200 transition-colors">
            Визовое ходатайство <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
          </button>
          <span class="text-[11px] bg-emerald-500/30 text-emerald-200 px-2 py-0.5 rounded-full font-mono">Готово к выдаче</span>
        </div>
      </div>
    `;
  }

  screen.innerHTML = `
    <!-- Top Welcome & AI Proactive Banner -->
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
      <div>
        <div class="flex items-center gap-2 mb-1">
          <span class="text-xs text-slate-500 dark:text-slate-400 font-medium capitalize">${new Date().toLocaleDateString('ru-RU', { weekday: 'long', day: 'numeric', month: 'long' })}</span>
        </div>
        <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Добрый день, ${p.name.split(' ')[0]} 👋
        </h1>
        <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
          ${p.faculty} • Студенческий билет: <span class="font-mono font-medium">${p.studentId}</span>
        </p>
      </div>
    </div>

    <!-- AI Diplomatic Insight Capsule -->
    <div class="mb-6 p-4 rounded-2xl bg-gradient-to-r from-blue-500/10 via-sky-500/10 to-indigo-500/10 dark:from-blue-950/40 dark:via-sky-950/30 dark:to-indigo-950/40 border border-blue-200/60 dark:border-blue-800/60 backdrop-blur-md flex items-start gap-3.5 shadow-sm">
      <div class="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-sky-500 text-white flex items-center justify-center shrink-0 shadow-sm">
        <i data-lucide="sparkles" class="w-5 h-5"></i>
      </div>
      <div class="flex-1">
        <div class="flex items-center gap-2">
          <span class="text-xs font-bold uppercase tracking-wider text-blue-700 dark:text-blue-300">AI-Инсайт Деканата («Tutor AI»)</span>
          <span class="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping"></span>
        </div>
        <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 mt-1 leading-relaxed">
          ${p.aiGreeting}
        </p>
      </div>
      <button onclick="switchTab('assistant')" class="hidden sm:flex items-center gap-1 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline shrink-0">
        Чат с Tutor AI <i data-lucide="chevron-right" class="w-4 h-4"></i>
      </button>
    </div>

    <!-- Bento Row 1: BRS Status & Next Class (Equal 50/50 Symmetrical Bento Cards) -->
    <div class="grid grid-cols-1 md:grid-cols-12 gap-5 mb-5">
      
      <!-- Bento 1: Accent Card (BRS Status / Honors / Risk) -> 6 cols -->
      <div class="md:col-span-6 flex flex-col h-full min-h-[260px]">
        ${accentCardHtml}
      </div>

      <!-- Bento 2: Next Up Today Class (Live Indicator & Directions) -> 6 cols -->
      <div class="md:col-span-6 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 sm:p-7 bento-card flex flex-col justify-between h-full min-h-[260px]">
        <div>
          <div class="flex items-center justify-between mb-3">
            <span class="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500">Ближайшая пара</span>
            ${liveClass ? `
              <span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold ${liveClass.isLive ? 'bg-emerald-50 text-emerald-700 border border-emerald-200 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800' : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'}">
                <span class="w-2 h-2 rounded-full ${liveClass.isLive ? 'bg-emerald-500 pulse-badge' : 'bg-slate-400'}"></span>
                ${liveClass.statusBadge || 'Следующая'}
              </span>
            ` : ''}
          </div>

          ${liveClass ? `
            <div class="text-sm font-semibold text-blue-600 dark:text-blue-400 font-mono mb-1">
              ${liveClass.time} • Пара ${liveClass.pairNumber}
            </div>
            <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
              ${liveClass.subject}
            </h3>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1.5">
              <i data-lucide="user-check" class="w-3.5 h-3.5"></i>
              ${liveClass.teacher}
            </p>
            <div class="mt-3.5 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
              <div class="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                <i data-lucide="map-pin" class="w-4 h-4 text-blue-500 shrink-0"></i>
                <span class="font-semibold">${liveClass.auditorium}</span>
              </div>
              <span class="text-[11px] text-slate-400">${liveClass.building}</span>
            </div>
          ` : `
            <div class="py-6 text-center text-slate-400 text-sm">Сегодня больше пар нет</div>
          `}
        </div>

        <div class="pt-4 mt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <button onclick="openCampusRouteModal('${liveClass ? liveClass.auditorium : 'Зал №1'}')" class="text-xs font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1.5 hover:underline">
            <i data-lucide="navigation" class="w-3.5 h-3.5"></i> Как пройти
          </button>
          <button onclick="switchTab('schedule')" class="text-xs font-medium text-slate-500 hover:text-slate-900 dark:hover:text-white flex items-center gap-1">
            Все расписание <i data-lucide="chevron-right" class="w-3.5 h-3.5"></i>
          </button>
        </div>
      </div>
    </div>

    <!-- Bento Row 2: Status & Quick Metrics Ribbon (4 Balanced Bento Columns) -->
    <div class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      
      <!-- ECTS Card -->
      <div onclick="openEctsInfoModal()" class="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-5 bento-card flex flex-col justify-between cursor-pointer hover:border-blue-300 dark:hover:border-blue-700 transition-all group">
        <div class="flex items-center justify-between">
          <div class="flex items-center gap-1.5">
            <span class="text-[11px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">ECTS Кредиты</span>
            <span class="text-[10px] px-1.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 group-hover:bg-blue-100 dark:group-hover:bg-blue-950 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors font-semibold">инфо</span>
          </div>
          <div class="w-7 h-7 rounded-full bg-blue-50 dark:bg-blue-950 flex items-center justify-center text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
            <i data-lucide="help-circle" class="w-4 h-4"></i>
          </div>
        </div>
        <div class="mt-2">
          <div class="text-2xl font-extrabold text-slate-900 dark:text-white">${p.ects} <span class="text-xs font-normal text-slate-400">/ ${p.maxEcts}</span></div>
          <div class="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full mt-2 overflow-hidden">
            <div class="bg-blue-600 h-full rounded-full transition-all" style="width: ${(p.ects / p.maxEcts) * 100}%"></div>
          </div>
        </div>
      </div>

      <!-- Attendance Card -->
      <div class="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-5 bento-card flex flex-col justify-between">
        <div class="flex items-center justify-between">
          <span class="text-[11px] font-bold uppercase tracking-wider text-slate-400">Посещаемость</span>
          <div class="w-7 h-7 rounded-full bg-emerald-50 dark:bg-emerald-950 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
            <i data-lucide="calendar-check" class="w-4 h-4"></i>
          </div>
        </div>
        <div class="mt-2">
          <div class="text-2xl font-extrabold text-slate-900 dark:text-white">${p.attendance}%</div>
          <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Норматив МГИМО: ≥ 70%</p>
        </div>
      </div>

      <!-- Academic Standing -->
      <div class="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-5 bento-card flex flex-col justify-between">
        <div class="flex items-center justify-between">
          <span class="text-[11px] font-bold uppercase tracking-wider text-slate-400">Успеваемость</span>
          <div class="w-7 h-7 rounded-full bg-amber-50 dark:bg-amber-950 flex items-center justify-center text-amber-600 dark:text-amber-400">
            <i data-lucide="award" class="w-4 h-4"></i>
          </div>
        </div>
        <div class="mt-2">
          <div class="text-lg font-bold text-slate-900 dark:text-white truncate">${p.statusLabel}</div>
          <p class="text-[11px] text-slate-500 dark:text-slate-400 mt-1">Зачетная книжка без хвостов</p>
        </div>
      </div>

      <!-- Digital ID Pass Trigger -->
      <div onclick="openStudentPassModal()" class="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-blue-500/50 rounded-3xl p-5 bento-card flex flex-col justify-between cursor-pointer transition-all group">
        <div class="flex items-center justify-between">
          <span class="text-[11px] font-bold uppercase tracking-wider text-slate-400">ID-Пропуск</span>
          <div class="w-7 h-7 rounded-full bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center group-hover:scale-110 transition-transform">
            <i data-lucide="qr-code" class="w-4 h-4"></i>
          </div>
        </div>
        <div class="mt-2">
          <div class="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Личный QR & NFC
          </div>
          <p class="text-[11px] text-blue-600 dark:text-blue-400 mt-1 group-hover:underline">Открыть пропуск →</p>
        </div>
      </div>

    </div>

    <!-- Active Certificates & Quick Action Bento Row -->
    <div class="grid grid-cols-1 md:grid-cols-12 gap-5 mb-8">
      
      <!-- Active Certificate Live Tracker (7 cols) -->
      <div class="md:col-span-7 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 bento-card flex flex-col justify-between">
        <div>
          <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-2">
              <div class="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <i data-lucide="file-text" class="w-4 h-4"></i>
              </div>
              <div>
                <h3 class="text-sm font-bold text-slate-900 dark:text-white">Активные заявки и справки</h3>
                <span class="text-[11px] text-slate-400">Электронный деканат МГИМО</span>
              </div>
            </div>
            <button onclick="openOrderCertificateModal()" class="px-3 py-1.5 rounded-full bg-blue-50 hover:bg-blue-100 text-blue-600 dark:bg-blue-950/60 dark:text-blue-300 dark:hover:bg-blue-900/60 text-xs font-semibold flex items-center gap-1 transition-all">
              <i data-lucide="plus" class="w-3.5 h-3.5"></i> Заказать новую
            </button>
          </div>

          ${activeCert ? `
            <div class="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
              <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                <div>
                  <h4 class="text-sm font-bold text-slate-800 dark:text-slate-100">${activeCert.title}</h4>
                  <p class="text-xs text-slate-500 mt-0.5">${activeCert.purpose}</p>
                </div>
                <span class="font-mono text-xs text-slate-400 bg-white dark:bg-slate-900 px-2.5 py-1 rounded-md border border-slate-200 dark:border-slate-700 self-start sm:self-auto">
                  № ${activeCert.documentNumber || '8941'}
                </span>
              </div>

              <!-- 4-Step Interactive Timeline -->
              <div class="mt-4 pt-3 border-t border-slate-200/60 dark:border-slate-700/60">
                <div class="grid grid-cols-4 gap-2 text-center">
                  <div class="flex flex-col items-center">
                    <div class="w-6 h-6 rounded-full ${activeCert.statusStep >= 1 ? 'bg-emerald-500 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-400'} flex items-center justify-center text-[11px] font-bold">
                      ✓
                    </div>
                    <span class="text-[10px] mt-1 font-medium ${activeCert.statusStep >= 1 ? 'text-slate-800 dark:text-slate-200' : 'text-slate-400'}">Подано</span>
                  </div>
                  <div class="flex flex-col items-center">
                    <div class="w-6 h-6 rounded-full ${activeCert.statusStep >= 2 ? 'bg-emerald-500 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-400'} flex items-center justify-center text-[11px] font-bold">
                      ${activeCert.statusStep >= 2 ? '✓' : '2'}
                    </div>
                    <span class="text-[10px] mt-1 font-medium ${activeCert.statusStep >= 2 ? 'text-slate-800 dark:text-slate-200' : 'text-slate-400'}">Канцелярия</span>
                  </div>
                  <div class="flex flex-col items-center">
                    <div class="w-6 h-6 rounded-full ${activeCert.statusStep >= 3 ? (activeCert.statusStep === 3 ? 'bg-blue-600 text-white ring-4 ring-blue-100 dark:ring-blue-900/50' : 'bg-emerald-500 text-white') : 'bg-slate-200 dark:bg-slate-700 text-slate-400'} flex items-center justify-center text-[11px] font-bold">
                      ${activeCert.statusStep > 3 ? '✓' : '3'}
                    </div>
                    <span class="text-[10px] mt-1 font-medium ${activeCert.statusStep >= 3 ? 'text-blue-600 dark:text-blue-400 font-bold' : 'text-slate-400'}">Подпись ЭЦП</span>
                  </div>
                  <div class="flex flex-col items-center">
                    <div class="w-6 h-6 rounded-full ${activeCert.statusStep >= 4 ? 'bg-emerald-500 text-white' : 'bg-slate-200 dark:bg-slate-700 text-slate-400'} flex items-center justify-center text-[11px] font-bold">
                      ${activeCert.statusStep >= 4 ? '✓' : '4'}
                    </div>
                    <span class="text-[10px] mt-1 font-medium ${activeCert.statusStep >= 4 ? 'text-emerald-600 dark:text-emerald-400 font-bold' : 'text-slate-400'}">Готово</span>
                  </div>
                </div>
              </div>
            </div>

            <div class="mt-4 flex items-center justify-between">
              <span class="text-xs text-slate-500">
                Ориентировочная готовность: <span class="font-medium text-slate-700 dark:text-slate-300">${activeCert.expectedDate}</span>
              </span>
              <button onclick="openCertificatePreviewModal('${activeCert.id}')" class="px-3.5 py-1.5 rounded-xl bg-slate-900 text-white dark:bg-blue-600 dark:hover:bg-blue-500 text-xs font-medium hover:bg-slate-800 transition-all flex items-center gap-1.5">
                <i data-lucide="eye" class="w-3.5 h-3.5"></i> Просмотреть бланк
              </button>
            </div>
          ` : `
            <div class="py-8 text-center text-slate-400 text-xs">Нет активных заявок. Закажите справку онлайн.</div>
          `}
        </div>
      </div>

      <!-- Quick Actions Grid (5 cols) -->
      <div class="md:col-span-5 bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 bento-card flex flex-col justify-between">
        <div>
          <span class="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-3 block">Быстрые сервисы</span>
          <div class="grid grid-cols-2 gap-3">
            <button onclick="openOrderCertificateModal()" class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 hover:bg-blue-50 dark:hover:bg-blue-950/40 border border-slate-200/60 dark:border-slate-700/60 text-left transition-all group">
              <div class="w-8 h-8 rounded-xl bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <i data-lucide="file-plus" class="w-4 h-4"></i>
              </div>
              <div class="text-xs font-bold text-slate-900 dark:text-white">Заказ справки</div>
              <div class="text-[11px] text-slate-400 mt-0.5">Военкомат, виза, стипендия</div>
            </button>

            <button onclick="openBrsCalculatorModal()" class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 hover:bg-amber-50 dark:hover:bg-amber-950/40 border border-slate-200/60 dark:border-slate-700/60 text-left transition-all group">
              <div class="w-8 h-8 rounded-xl bg-amber-100 dark:bg-amber-900 text-amber-600 dark:text-amber-300 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <i data-lucide="calculator" class="w-4 h-4"></i>
              </div>
              <div class="text-xs font-bold text-slate-900 dark:text-white">Калькулятор БРС</div>
              <div class="text-[11px] text-slate-400 mt-0.5">Сколько до автомата</div>
            </button>

            <button onclick="openStudentPassModal()" class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 border border-slate-200/60 dark:border-slate-700/60 text-left transition-all group">
              <div class="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-300 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <i data-lucide="qr-code" class="w-4 h-4"></i>
              </div>
              <div class="text-xs font-bold text-slate-900 dark:text-white">Цифровой пропуск</div>
              <div class="text-[11px] text-slate-400 mt-0.5">Турникеты МГИМО / NFC</div>
            </button>

            <button onclick="switchTab('assistant')" class="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800/60 hover:bg-purple-50 dark:hover:bg-purple-950/40 border border-slate-200/60 dark:border-slate-700/60 text-left transition-all group">
              <div class="w-8 h-8 rounded-xl bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-300 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <i data-lucide="bot" class="w-4 h-4"></i>
              </div>
              <div class="text-xs font-bold text-slate-900 dark:text-white">AI-Деканат</div>
              <div class="text-[11px] text-slate-400 mt-0.5">Регламенты & пересдачи</div>
            </button>
          </div>
        </div>

        <div class="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-400">
          <span>Служба техподдержки: 30-12</span>
          <span class="font-mono">Версия: 2.4-ai</span>
        </div>
      </div>
    </div>
  `;
}

// ==========================================
// 2. SCREEN: SCHEDULE (Расписание занятий)
// ==========================================
function renderScheduleScreen(student) {
  const screen = document.getElementById('screen-schedule');
  if (!screen) return;

  const currentTab = AppState.scheduleTab || 'today';
  const filter = AppState.scheduleFilter || 'all';

  let filteredToday = student.todaySchedule;
  if (filter === 'lecture') filteredToday = filteredToday.filter(c => c.type === 'Лекция');
  if (filter === 'seminar') filteredToday = filteredToday.filter(c => c.type === 'Семинар');
  if (filter === 'language') filteredToday = filteredToday.filter(c => c.type === 'Языковая группа');

  screen.innerHTML = `
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
      <div>
        <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Расписание занятий
        </h1>
        <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
          ${student.profile.shortFaculty} • Группа ${student.profile.group} • Осенний семестр 2026/2027
        </p>
      </div>

      <!-- Schedule View Pills -->
      <div class="vertix-glass rounded-full p-1 border border-slate-200 dark:border-slate-800 flex items-center self-start md:self-auto shadow-sm">
        <button onclick="setScheduleTab('today')" class="px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${currentTab === 'today' ? 'bg-slate-900 text-white dark:bg-blue-600 shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'}">
          Сегодня
        </button>
        <button onclick="setScheduleTab('week')" class="px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${currentTab === 'week' ? 'bg-slate-900 text-white dark:bg-blue-600 shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'}">
          Вся неделя
        </button>
        <button onclick="setScheduleTab('exams')" class="px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${currentTab === 'exams' ? 'bg-slate-900 text-white dark:bg-blue-600 shadow-sm' : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'}">
          Сессия
        </button>
      </div>
    </div>

    <!-- Filter chips for classes -->
    ${currentTab === 'today' ? `
      <div class="flex items-center gap-2 mb-6 overflow-x-auto pb-1">
        <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider mr-1">Фильтр:</span>
        <button onclick="setScheduleFilter('all')" class="px-3 py-1 rounded-full text-xs font-medium ${filter === 'all' ? 'bg-blue-600 text-white' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700'}">
          Все пары (${student.todaySchedule.length})
        </button>
        <button onclick="setScheduleFilter('lecture')" class="px-3 py-1 rounded-full text-xs font-medium ${filter === 'lecture' ? 'bg-blue-600 text-white' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700'}">
          Лекции
        </button>
        <button onclick="setScheduleFilter('seminar')" class="px-3 py-1 rounded-full text-xs font-medium ${filter === 'seminar' ? 'bg-blue-600 text-white' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700'}">
          Семинары
        </button>
        <button onclick="setScheduleFilter('language')" class="px-3 py-1 rounded-full text-xs font-medium ${filter === 'language' ? 'bg-blue-600 text-white' : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700'}">
          Иностранные языки
        </button>
      </div>
    ` : ''}

    <!-- Content based on current Schedule Tab -->
    ${currentTab === 'today' ? `
      <div class="space-y-4">
        ${filteredToday.map(c => `
          <div class="bg-white dark:bg-slate-900 border ${c.isLive ? 'border-emerald-400 dark:border-emerald-600 shadow-emerald-500/10 ring-2 ring-emerald-500/20' : 'border-slate-200/80 dark:border-slate-800'} rounded-3xl p-5 sm:p-6 bento-card relative">
            <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              
              <div class="flex items-start gap-4">
                <!-- Pair Number Pill -->
                <div class="w-12 h-12 rounded-2xl ${c.isLive ? 'bg-emerald-500 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300'} flex flex-col items-center justify-center shrink-0 font-bold">
                  <span class="text-xs uppercase leading-none text-slate-400 dark:text-slate-400 font-normal">Пара</span>
                  <span class="text-lg leading-tight">${c.pairNumber}</span>
                </div>

                <div>
                  <div class="flex items-center gap-2 flex-wrap mb-1">
                    <span class="font-mono text-xs font-semibold text-blue-600 dark:text-blue-400">${c.time}</span>
                    <span class="text-slate-300 dark:text-slate-700">•</span>
                    <span class="text-xs px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-medium">${c.type}</span>
                    ${c.statusBadge ? `
                      <span class="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-0.5 rounded-full ${c.statusBadge === 'Идет сейчас' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 pulse-badge' : c.statusBadge === 'Замена ауд.' ? 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 font-bold border border-rose-300 dark:border-rose-800 animate-pulse' : 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300'}">
                        ${c.statusBadge === 'Замена ауд.' ? '⚠️ ' : ''}${c.statusBadge}
                      </span>
                    ` : ''}
                  </div>

                  <h3 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                    ${c.subject}
                  </h3>

                  <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1.5">
                    <i data-lucide="user" class="w-3.5 h-3.5 text-slate-400"></i>
                    ${c.teacher}
                  </p>
                </div>
              </div>

              <!-- Location & Action -->
              <div class="flex sm:flex-col items-center sm:items-end justify-between border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-100 dark:border-slate-800">
                <div class="text-left sm:text-right">
                  <div class="text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200 flex items-center gap-1 sm:justify-end">
                    <i data-lucide="map-pin" class="w-3.5 h-3.5 text-blue-500"></i>
                    ${c.auditorium}
                  </div>
                  <div class="text-[11px] text-slate-400 mt-0.5">${c.building}</div>
                </div>

                <button onclick="openCampusRouteModal('${c.auditorium}')" class="mt-2 text-xs font-semibold px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-all flex items-center gap-1">
                  <i data-lucide="navigation" class="w-3 h-3"></i> Маршрут
                </button>
              </div>

            </div>
          </div>
        `).join('')}
      </div>
    ` : currentTab === 'week' ? `
      <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
        ${student.weekSchedule.map(day => `
          <div class="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 bento-card">
            <h3 class="text-sm font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-4 pb-2 border-b border-slate-100 dark:border-slate-800">
              ${day.day}
            </h3>
            <div class="space-y-3">
              ${day.classes.map(cls => `
                <div class="flex items-center gap-3 p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                  <div class="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span class="text-xs sm:text-sm font-medium text-slate-800 dark:text-slate-200">${cls}</span>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>
    ` : `
      <!-- Exam Schedule Tab -->
      <div class="space-y-4">
        ${student.examSchedule.map(ex => `
          <div class="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 bento-card flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div class="flex items-start gap-4">
              <div class="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex flex-col items-center justify-center shrink-0 font-bold">
                <i data-lucide="award" class="w-5 h-5"></i>
              </div>
              <div>
                <span class="font-mono text-xs font-bold text-amber-600 dark:text-amber-400">${ex.date} • ${ex.time}</span>
                <h3 class="text-base font-bold text-slate-900 dark:text-white mt-0.5">${ex.subject}</h3>
                <p class="text-xs text-slate-400 mt-1">${ex.type} • ${ex.room}</p>
              </div>
            </div>
            <span class="self-start sm:self-auto px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
              По регламенту МГИМО
            </span>
          </div>
        `).join('')}
      </div>
    `}
  `;
}

function setScheduleTab(tab) {
  AppState.scheduleTab = tab;
  renderScheduleScreen(getCurrentStudent());
  initLucide();
}

function setScheduleFilter(filter) {
  AppState.scheduleFilter = filter;
  renderScheduleScreen(getCurrentStudent());
  initLucide();
}

// ==========================================
// 3. SCREEN: BRS & GRADES (Успеваемость и БРС)
// ==========================================
function renderBRSScreen(student) {
  const screen = document.getElementById('screen-brs');
  if (!screen) return;

  const p = student.profile;
  const subjects = student.brsSubjects;

  screen.innerHTML = `
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
      <div>
        <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Балльно-рейтинговая система (БРС)
        </h1>
        <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
          Академический мониторинг успеваемости и прогноз автоматической аттестации
        </p>
      </div>

      <!-- Action Button: Open Live Calculator -->
      <button onclick="openBrsCalculatorModal()" class="px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-sky-600 hover:from-blue-500 hover:to-sky-500 text-white text-xs font-bold shadow-md shadow-blue-500/20 flex items-center gap-2 self-start md:self-auto transition-all">
        <i data-lucide="calculator" class="w-4 h-4"></i> Калькулятор баллов до автомата
      </button>
    </div>

    <!-- Top Summary Banner -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div class="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-5 bento-card">
        <span class="text-xs font-bold uppercase tracking-wider text-slate-400">Средний балл БРС</span>
        <div class="text-3xl font-extrabold text-slate-900 dark:text-white mt-1">${p.gpa}</div>
        <span class="inline-block mt-1 text-xs font-semibold px-2 py-0.5 rounded-full ${p.gpa >= 90 ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' : p.gpa >= 70 ? 'bg-blue-100 text-blue-800' : 'bg-rose-100 text-rose-800'}">
          Шкала ECTS: ${p.gradeLetter}
        </span>
      </div>

      <div class="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-5 bento-card">
        <span class="text-xs font-bold uppercase tracking-wider text-slate-400">Рейтинг на курсе</span>
        <div class="text-3xl font-extrabold text-slate-900 dark:text-white mt-1">${p.status === 'excellent' ? '#1 из 114' : p.status === 'risk' ? '#108 из 114' : '#14 из 48'}</div>
        <p class="text-xs text-slate-400 mt-1">${p.faculty}</p>
      </div>

      <div class="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-5 bento-card">
        <span class="text-xs font-bold uppercase tracking-wider text-slate-400">Риск недопуска</span>
        <div class="text-3xl font-extrabold ${p.status === 'risk' ? 'text-rose-600' : 'text-emerald-600'} mt-1">
          ${p.status === 'risk' ? '1 предмет' : '0 дисциплин'}
        </div>
        <p class="text-xs text-slate-400 mt-1">${p.status === 'risk' ? 'Испанский (58 баллов)' : 'Все пороги пройдены'}</p>
      </div>

      <div onclick="openEctsInfoModal()" class="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-5 bento-card cursor-pointer hover:border-blue-300 dark:hover:border-blue-700 transition-all group">
        <div class="flex items-center justify-between">
          <span class="text-xs font-bold uppercase tracking-wider text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">ECTS Прогресс</span>
          <span class="text-[10px] px-1.5 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500 font-semibold group-hover:bg-blue-100 group-hover:text-blue-600 transition-colors">справка</span>
        </div>
        <div class="text-3xl font-extrabold text-slate-900 dark:text-white mt-1">${p.ects} / ${p.maxEcts}</div>
        <div class="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full mt-2 overflow-hidden">
          <div class="bg-blue-600 h-full rounded-full" style="width: ${(p.ects / p.maxEcts) * 100}%"></div>
        </div>
      </div>
    </div>

    <!-- Risk Radar & Subjects Breakdown Accordion -->
    <div class="space-y-4">
      <div class="flex items-center justify-between mb-2">
        <h3 class="text-base font-bold text-slate-900 dark:text-white">Детальная раскладка по дисциплинам</h3>
        <span class="text-xs text-slate-400 font-medium">Шкала МГИМО: 60 = Зачет • 90 = Отлично (A)</span>
      </div>

      ${subjects.map(s => `
        <div class="bg-white dark:bg-slate-900 border ${s.riskLevel === 'danger' ? 'border-rose-400 dark:border-rose-700 ring-2 ring-rose-400/20' : 'border-slate-200/80 dark:border-slate-800'} rounded-3xl p-6 bento-card">
          <div class="flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            <div class="flex-1">
              <div class="flex items-center gap-2 flex-wrap mb-1">
                <span class="text-xs font-bold px-2 py-0.5 rounded-full ${s.riskLevel === 'safe' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300' : s.riskLevel === 'warning' ? 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300' : 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300 font-bold animate-pulse'}">
                  ${s.riskLevel === 'safe' ? '🟢 Безопасная зона' : s.riskLevel === 'warning' ? '🟡 Зона внимания' : '🔴 КРИТИЧЕСКИЙ РИСК'}
                </span>
                <span class="text-xs font-mono font-bold text-slate-400">Категория: ${s.grade}</span>
              </div>
              <h4 class="text-lg font-bold text-slate-900 dark:text-white">${s.title}</h4>
              <p class="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">${s.recommendation}</p>
            </div>

            <!-- Total Score Pill -->
            <div class="flex items-center gap-3">
              <div class="text-right">
                <div class="text-2xl font-extrabold ${s.points >= 90 ? 'text-emerald-600' : s.points >= 70 ? 'text-blue-600' : 'text-rose-600'}">
                  ${s.points} <span class="text-xs font-normal text-slate-400">/ 100</span>
                </div>
                <div class="text-[11px] text-slate-400">${s.points >= 90 ? 'Автомат' : s.points >= 60 ? 'Допуск есть' : 'Недопуск (<60)'}</div>
              </div>
              <button onclick="openSubjectBrsDetail('${s.id}')" class="w-9 h-9 rounded-full bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-300 transition-colors">
                <i data-lucide="chevron-down" class="w-4 h-4"></i>
              </button>
            </div>

          </div>

          <!-- Progress breakdown bar -->
          <div class="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/80">
            <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center text-xs">
              <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60">
                <span class="text-slate-400 block text-[10px] uppercase">Семинары (макс. ${s.maxSeminars})</span>
                <span class="font-bold text-slate-800 dark:text-slate-200 text-sm">${s.seminars} б.</span>
              </div>
              <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60">
                <span class="text-slate-400 block text-[10px] uppercase">Контрольные (макс. ${s.maxTests})</span>
                <span class="font-bold text-slate-800 dark:text-slate-200 text-sm">${s.tests} б.</span>
              </div>
              <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60">
                <span class="text-slate-400 block text-[10px] uppercase">Посещаемость (макс. ${s.maxAttendance})</span>
                <span class="font-bold text-slate-800 dark:text-slate-200 text-sm">${s.attendance} б.</span>
              </div>
              <div class="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/60">
                <span class="text-slate-400 block text-[10px] uppercase">Экзамен/Зачет (макс. ${s.maxExam})</span>
                <span class="font-bold text-slate-800 dark:text-slate-200 text-sm">${s.exam} б.</span>
              </div>
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

// ==========================================
// 4. SCREEN: CERTIFICATES & REQUESTS (Справки)
// ==========================================
function renderCertificatesScreen(student) {
  const screen = document.getElementById('screen-certificates');
  if (!screen) return;

  const certs = student.certificates;

  screen.innerHTML = `
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
      <div>
        <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Справки и заявления
        </h1>
        <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
          Единое окно безбумажного деканата МГИМО МИД России с верификацией по QR-коду
        </p>
      </div>

      <button onclick="openOrderCertificateModal()" class="px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold shadow-md shadow-blue-500/20 flex items-center gap-2 self-start md:self-auto transition-all">
        <i data-lucide="plus" class="w-4 h-4"></i> Заказать справку онлайн
      </button>
    </div>

    <!-- Certificates Catalog Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div onclick="quickOrderDoc('Справка об обучении')" class="cursor-pointer bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-5 bento-card hover:border-blue-500 transition-all group">
        <div class="w-10 h-10 rounded-2xl bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
          <i data-lucide="file-check" class="w-5 h-5"></i>
        </div>
        <h4 class="text-sm font-bold text-slate-900 dark:text-white">Справка об обучении</h4>
        <p class="text-xs text-slate-400 mt-1">Для военкомата, посольств, налогового вычета</p>
        <div class="mt-3 text-xs font-semibold text-blue-600 dark:text-blue-400 flex items-center gap-1">
          Заказать в 1 клик <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
        </div>
      </div>

      <div onclick="quickOrderDoc('Выписка с оценками (Transcript)')" class="cursor-pointer bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-5 bento-card hover:border-blue-500 transition-all group">
        <div class="w-10 h-10 rounded-2xl bg-purple-50 dark:bg-purple-950 text-purple-600 dark:text-purple-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
          <i data-lucide="graduation-cap" class="w-5 h-5"></i>
        </div>
        <h4 class="text-sm font-bold text-slate-900 dark:text-white">Academic Transcript</h4>
        <p class="text-xs text-slate-400 mt-1">На русском или английском с печатью деканата</p>
        <div class="mt-3 text-xs font-semibold text-purple-600 dark:text-purple-400 flex items-center gap-1">
          Заказать в 1 клик <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
        </div>
      </div>

      <div onclick="quickOrderDoc('Визовое ходатайство')" class="cursor-pointer bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-5 bento-card hover:border-blue-500 transition-all group">
        <div class="w-10 h-10 rounded-2xl bg-amber-50 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
          <i data-lucide="plane" class="w-5 h-5"></i>
        </div>
        <h4 class="text-sm font-bold text-slate-900 dark:text-white">Визовое ходатайство</h4>
        <p class="text-xs text-slate-400 mt-1">Для выезда на стажировку или продления визы</p>
        <div class="mt-3 text-xs font-semibold text-amber-600 dark:text-amber-400 flex items-center gap-1">
          Заказать в 1 клик <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
        </div>
      </div>

      <div onclick="quickOrderDoc('Заявление на имя декана')" class="cursor-pointer bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-5 bento-card hover:border-blue-500 transition-all group">
        <div class="w-10 h-10 rounded-2xl bg-emerald-50 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
          <i data-lucide="edit-3" class="w-5 h-5"></i>
        </div>
        <h4 class="text-sm font-bold text-slate-900 dark:text-white">Заявление декану</h4>
        <p class="text-xs text-slate-400 mt-1">Выбор языка, смена спецкурса, матпомощь</p>
        <div class="mt-3 text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
          Заказать в 1 клик <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
        </div>
      </div>
    </div>

    <!-- Active Orders List with Live Tracker -->
    <div class="space-y-4">
      <h3 class="text-base font-bold text-slate-900 dark:text-white">Реестр ваших запросов</h3>

      ${certs.length > 0 ? certs.map(c => `
        <div class="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl p-6 bento-card">
          <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            
            <div class="flex-1">
              <div class="flex items-center gap-2 flex-wrap mb-1">
                <span class="font-mono text-xs font-bold text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 px-2 py-0.5 rounded">
                  № ${c.documentNumber}
                </span>
                <span class="text-xs text-slate-400">Подано: ${c.requestDate}</span>
              </div>
              <h4 class="text-lg font-bold text-slate-900 dark:text-white">${c.title}</h4>
              <p class="text-xs text-slate-500 dark:text-slate-400 mt-0.5">Цель: <span class="font-medium text-slate-700 dark:text-slate-300">${c.purpose}</span></p>
            </div>

            <!-- Status & Action Buttons -->
            <div class="flex items-center gap-3">
              <button onclick="openCertificatePreviewModal('${c.id}')" class="px-4 py-2 rounded-xl bg-slate-900 text-white dark:bg-blue-600 hover:bg-slate-800 text-xs font-semibold transition-all flex items-center gap-1.5 shadow-sm">
                <i data-lucide="printer" class="w-3.5 h-3.5"></i> Просмотреть бланк
              </button>
            </div>

          </div>

          <!-- Live 4-Step Tracker -->
          <div class="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800">
            <div class="flex items-center justify-between text-xs text-slate-500 mb-2">
              <span class="font-semibold text-slate-700 dark:text-slate-300">Текущий этап: <span class="text-blue-600 dark:text-blue-400">${c.statusText}</span></span>
              <span>Ожидание: ${c.expectedDate}</span>
            </div>

            <div class="grid grid-cols-4 gap-2 text-center mt-3">
              <div class="p-2.5 rounded-2xl ${c.statusStep >= 1 ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800' : 'bg-slate-50 dark:bg-slate-800/40 text-slate-400'}">
                <div class="text-xs font-bold">1. Подано</div>
                <div class="text-[10px] text-slate-400 mt-0.5">Онлайн форма</div>
              </div>
              <div class="p-2.5 rounded-2xl ${c.statusStep >= 2 ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800' : 'bg-slate-50 dark:bg-slate-800/40 text-slate-400'}">
                <div class="text-xs font-bold">2. Канцелярия</div>
                <div class="text-[10px] text-slate-400 mt-0.5">Проверка данных</div>
              </div>
              <div class="p-2.5 rounded-2xl ${c.statusStep >= 3 ? (c.statusStep === 3 ? 'bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300 border border-blue-300 dark:border-blue-700 ring-2 ring-blue-500/20' : 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800') : 'bg-slate-50 dark:bg-slate-800/40 text-slate-400'}">
                <div class="text-xs font-bold">3. Подпись</div>
                <div class="text-[10px] text-slate-400 mt-0.5">Гербовая ЭЦП</div>
              </div>
              <div class="p-2.5 rounded-2xl ${c.statusStep >= 4 ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800 font-bold' : 'bg-slate-50 dark:bg-slate-800/40 text-slate-400'}">
                <div class="text-xs font-bold">4. Выдано</div>
                <div class="text-[10px] text-slate-400 mt-0.5">QR верифицирован</div>
              </div>
            </div>
          </div>
        </div>
      `).join('') : `
        <div class="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-10 text-center text-slate-400 text-sm">
          Заявок нет. Нажмите «Заказать справку онлайн», чтобы сформировать первую выписку.
        </div>
      `}
    </div>
  `;
}

// ==========================================
// 5. SCREEN: AI ASSISTANT («Tutor AI»)
// ==========================================
function renderAssistantScreen(student) {
  const screen = document.getElementById('screen-assistant');
  if (!screen) return;

  const p = student.profile;

  // Initialize chat history if empty
  if (AppState.chatMessages.length === 0) {
    AppState.chatMessages = [
      {
        sender: 'ai',
        time: 'Сейчас',
        text: `Здравствуйте, **${p.name}**! Я ваш **Tutor AI** — цифровой советник деканата МГИМО. \n\nЯ обучен на базе Устава МГИМО, Положения об организации учебного процесса, критериев БРС и актуального расписания аудиторного фонда. Чем могу помочь вам сегодня?`
      }
    ];
  }

  screen.innerHTML = `
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
      <div>
        <div class="flex items-center gap-2 mb-1">
          <span class="inline-flex items-center gap-1 text-xs font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-950 dark:text-blue-300">
            <i data-lucide="sparkles" class="w-3 h-3"></i> MGIMO Diplomat.Core AI
          </span>
          <span class="text-xs text-slate-400">• Модель: Tutor-4o</span>
        </div>
        <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Tutor AI
        </h1>
        <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
          Персональный AI-декан по регламентам, рейтингу БРС, пересдачам и кампусу
        </p>
      </div>

      <!-- Quick Reset Button -->
      <button onclick="clearChatHistory()" class="px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 text-xs font-medium self-start md:self-auto transition-all">
        Очистить диалог
      </button>
    </div>

    <!-- Quick Prompt Chips -->
    <div class="mb-4 flex items-center gap-2 overflow-x-auto pb-2">
      <span class="text-xs font-semibold text-slate-400 uppercase tracking-wider shrink-0">Частые вопросы:</span>
      <button onclick="sendQuickPrompt('Как получить автомат по праву ВТО?')" class="px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 hover:border-blue-500 transition-all shrink-0">
        🎯 Как получить автомат?
      </button>
      <button onclick="sendQuickPrompt('Где находится аудитория 3144 и 4118?')" class="px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 hover:border-blue-500 transition-all shrink-0">
        🗺️ Где аудитория 3144?
      </button>
      <button onclick="sendQuickPrompt('Как заказать справку для посольства на визу?')" class="px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 hover:border-blue-500 transition-all shrink-0">
        📄 Справка для визы
      </button>
      <button onclick="sendQuickPrompt('Что делать при пропуске по болезни?')" class="px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 hover:border-blue-500 transition-all shrink-0">
        🏥 Справка 095/у и пропуски
      </button>
      <button onclick="sendQuickPrompt('Покажи план спасения сессии')" class="px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-medium text-slate-700 dark:text-slate-300 hover:border-blue-500 transition-all shrink-0">
        ⚡ План спасения сессии
      </button>
    </div>

    <!-- Chat Window Card -->
    <div class="bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-3xl bento-card flex flex-col h-[600px] shadow-sm overflow-hidden">
      
      <!-- Chat Header -->
      <div class="p-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/30">
        <div class="flex items-center gap-3">
          <div class="w-9 h-9 rounded-full bg-gradient-to-tr from-blue-600 to-sky-500 text-white flex items-center justify-center font-bold shadow-sm">
            <i data-lucide="bot" class="w-5 h-5"></i>
          </div>
          <div>
            <h4 class="text-sm font-bold text-slate-900 dark:text-white">Tutor AI</h4>
            <div class="flex items-center gap-1.5 text-[11px] text-emerald-600 dark:text-emerald-400">
              <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              На связи • Знает профиль: ${p.shortFaculty}
            </div>
          </div>
        </div>
        <div class="text-xs font-mono text-slate-400">МГИМО AI v2.4</div>
      </div>

      <!-- Messages Stream -->
      <div id="chat-messages-container" class="flex-1 p-5 overflow-y-auto space-y-4">
        ${AppState.chatMessages.map(m => `
          <div class="flex items-start gap-3 ${m.sender === 'user' ? 'flex-row-reverse' : ''}">
            <div class="w-8 h-8 rounded-full ${m.sender === 'user' ? 'bg-slate-800 dark:bg-slate-700' : 'bg-gradient-to-tr from-blue-600 to-sky-500'} text-white flex items-center justify-center shrink-0 text-xs font-bold shadow-sm">
              ${m.sender === 'user' ? 'Я' : 'AI'}
            </div>
            <div class="max-w-[85%] sm:max-w-[75%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${m.sender === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-slate-100 dark:bg-slate-800/90 text-slate-800 dark:text-slate-200 rounded-tl-none border border-slate-200/50 dark:border-slate-700/50'}">
              ${formatAiMarkdown(m.text)}
              <div class="text-[10px] mt-2 opacity-60 text-right font-mono">${m.time}</div>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Typing Indicator (hidden by default) -->
      <div id="ai-typing-indicator" class="hidden px-6 py-2 text-xs text-slate-400 flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-blue-500 animate-bounce"></span>
        <span>Tutor AI анализирует регламенты МГИМО...</span>
      </div>

      <!-- Chat Input Bar -->
      <div class="p-3 sm:p-4 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900">
        <form onsubmit="handleSendChatMessage(event)" class="flex items-center gap-2">
          <input
            id="chat-input-field"
            type="text"
            placeholder="Задайте дипломатический или учебный вопрос..."
            class="flex-1 px-4 py-2.5 rounded-full bg-slate-100 dark:bg-slate-800 border-none text-xs sm:text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
            autocomplete="off"
          />
          <button
            type="submit"
            class="w-10 h-10 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shadow-md shadow-blue-500/20 shrink-0 transition-transform active:scale-95"
          >
            <i data-lucide="send" class="w-4 h-4"></i>
          </button>
        </form>
      </div>

    </div>
  `;
}

function formatAiMarkdown(text) {
  // Simple markdown processor for bold, list, breaks
  let res = text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\n\n/g, '<br/><br/>')
    .replace(/\n/g, '<br/>');
  return res;
}

function sendQuickPrompt(prompt) {
  const input = document.getElementById('chat-input-field');
  if (input) {
    input.value = prompt;
    handleSendChatMessage(new Event('submit'));
  }
}

async function handleSendChatMessage(e) {
  if (e && e.preventDefault) e.preventDefault();
  const input = document.getElementById('chat-input-field');
  if (!input) return;
  const userText = input.value.trim();
  if (!userText) return;

  input.value = '';

  // Append user message
  const now = new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' });
  AppState.chatMessages.push({
    sender: 'user',
    time: now,
    text: userText
  });

  updateChatUI();

  // Show typing indicator
  const indicator = document.getElementById('ai-typing-indicator');
  if (indicator) indicator.classList.remove('hidden');

  let aiResponseText = '';

  // 1. Попытка сгенерировать настоящий живой ответ через быструю открытую нейросеть (GET-запрос без CORS/OPTIONS)
  try {
    const student = getCurrentStudent();
    const p = student.profile;
    const prompt = `Студент МГИМО ${p.name} (факультет ${p.faculty}, курс ${p.course}, БРС ${p.gpa}/100) спрашивает: "${userText}". 
Ответь ему как персональный интеллектуальный декан "Tutor AI" МГИМО. 
Дай четкий, полезный, современный пошаговый ответ без бюрократии, объясни, как это сделать онлайн в цифровом деканате, используй списки и жирный шрифт.`;

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 4500); // 4.5 сек таймаут

    const url = `https://text.pollinations.ai/${encodeURIComponent(prompt)}?model=openai&seed=${Math.floor(Math.random() * 10000)}`;
    const response = await fetch(url, { signal: controller.signal });
    clearTimeout(timeoutId);

    if (response.ok) {
      const liveText = await response.text();
      if (liveText && liveText.trim().length > 20 && !liveText.includes('<html>')) {
        aiResponseText = liveText.trim();
      }
    }
  } catch (err) {
    console.log('Tutor AI live LLM fallback to semantic engine:', err);
  }

  // 2. Если нейросеть ответила медленно или офлайн — используем умную базу знаний МГИМО
  if (!aiResponseText) {
    aiResponseText = generateDiplomatAiResponse(userText);
  }

  if (indicator) indicator.classList.add('hidden');
  AppState.chatMessages.push({
    sender: 'ai',
    time: new Date().toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
    text: aiResponseText
  });
  updateChatUI();
}

function updateChatUI() {
  const container = document.getElementById('chat-messages-container');
  if (!container) return;
  container.innerHTML = AppState.chatMessages.map(m => `
    <div class="flex items-start gap-3 ${m.sender === 'user' ? 'flex-row-reverse' : ''}">
      <div class="w-8 h-8 rounded-full ${m.sender === 'user' ? 'bg-slate-800 dark:bg-slate-700' : 'bg-gradient-to-tr from-blue-600 to-sky-500'} text-white flex items-center justify-center shrink-0 text-xs font-bold shadow-sm">
        ${m.sender === 'user' ? 'Я' : 'AI'}
      </div>
      <div class="max-w-[85%] sm:max-w-[75%] rounded-2xl p-4 text-xs sm:text-sm leading-relaxed ${m.sender === 'user' ? 'bg-blue-600 text-white rounded-tr-none' : 'bg-slate-100 dark:bg-[#121214] text-slate-800 dark:text-slate-200 rounded-tl-none border border-slate-200/50 dark:border-white/10'}">
        ${formatAiMarkdown(m.text)}
        <div class="text-[10px] mt-2 opacity-60 text-right font-mono">${m.time}</div>
      </div>
    </div>
  `).join('');
  container.scrollTop = container.scrollHeight;
  initLucide();
}

function clearChatHistory() {
  AppState.chatMessages = [];
  renderAssistantScreen(getCurrentStudent());
  initLucide();
}

// AI Knowledge Brain & Intent Engine (30+ сценариев МГИМО без бюрократии)
function generateDiplomatAiResponse(query) {
  const q = query.toLowerCase().trim();
  const student = getCurrentStudent();
  const p = student.profile;

  // 1. Воинский учет и военкомат (все формы слов: воинск, учет, военн, армия, отсрочка)
  if (q.includes('воинск') || q.includes('воен') || q.includes('учет') || q.includes('учёт') || q.includes('арми') || q.includes('приписн') || q.includes('отсрочк') || q.includes('стол') || q.includes('повестк')) {
    return `🎖️ **Постановка на воинский учёт в МГИМО («Деканат Будущего»):**

В нашем цифровом деканате встать на воинский учёт можно **полностью онлайн без очередей**:

1. **Онлайн-заявление**: перейдите в раздел **«Военный стол»** в меню личного кабинета.
2. **Загрузка данных**: прикрепите фото или скан приписного свидетельства (или военного билета) и страницы паспорта с регистрацией.
3. **Автоматическая верификация**: система сама сформирует учетную карточку студента формы №10 и отправит данные во Второй отдел МГИМО.
4. **Справка Приложение №4 (об отсрочке от призыва)**: генерируется автоматически в течение 1 дня с гербовой электронной подписью (ЭЦП). Вы можете:
   • Скачать официальный PDF с защитным QR-кодом для личной подачи.
   • Заказать автоматическую цифровую отправку справки напрямую в ваш районный военкомат!

*Справочно (если требуется очная сверка оригиналов)*: Военно-учетный стол расположен в корпусе «Г», кабинет 108. Приемные часы: пн–чт с 10:00 до 16:30.`;
  }

  // 2. Приветствия и small talk
  if (q.match(/^(привет|здравствуй|добрый|хай|салам|bonjour|hello)/)) {
    return `Здравствуйте, **${p.name}**! Рад вас приветствовать. Как ваш учебный день на факультете **${p.shortFaculty}**? Могу помочь с расписанием, расчетом БРС, оформлением справок или подготовкой к дипломатическим практикам. О чем хотите узнать?`;
  }

  if (q.includes('кто ты') || q.includes('что ты умеешь') || q.includes('что ты за ии')) {
    return `Я — **Tutor AI**, цифровой ассистент и советник электронного деканата МГИМО МИД России.\n\n**Мои ключевые возможности:**\n• **Академический радар**: считаю ваши баллы БРС, прогнозирую автомат и предупреждаю о рисках.\n• **Безбумажный деканат**: помогаю заказать справки в посольства, военкомат или для общежития.\n• **Кампусный гид**: знаю все корпуса на Вернадского, 76, аудитории и замены пар.\n• **Дипломатический тьютор**: консультирую по языковым кафедрам, стажировкам в МИД и регламентам сессии.`;
  }

  if (q.includes('как дела') || q.includes('как жизнь') || q.includes('настроение')) {
    return `Благодарю за интерес! Все системы деканата функционируют в штатном режиме: расписание синхронизировано, БРС обновляется в реальном времени, а ваша успеваемость находится под моим надежным контролем. Чем могу быть полезен сегодня?`;
  }

  // 3. БРС, автоматы, баллы
  if (q.includes('автомат') || q.includes('балл') || q.includes('вто') || q.includes('оценк') || q.includes('рейтинг')) {
    return `По Положению о БРС МГИМО:\n\n• **Оценка «Отлично» (категория A)** ставится автоматически при наборе **90–100 баллов**.\n• **Оценка «Хорошо» (B/C)**: 75–89 баллов.\n• **Удовлетворительно (D/E)**: 60–74 балла.\n• **Менее 60 баллов (F)**: академическая задолженность и недопуск к сессии.\n\n*Совет от Tutor AI:* чтобы добрать баллы, сдавайте доклады на кафедральных круглых столах и публикуйте тезисы в Студенческом научном обществе (СНО МГИМО)!`;
  }

  // 4. Стажировки в МИД и карьера
  if (q.includes('мид') || q.includes('стажировк') || q.includes('практик') || q.includes('работ') || q.includes('посольств') || q.includes('дипломат')) {
    return `🏛️ **Стажировки в системе МИД России и международных организациях:**

1. **Критерии отбора**:
   • Средний балл диплома (GPA) не ниже **4.5** (по шкале БРС — от 85 баллов).
   • Владение первым иностранным языком на уровне не ниже категории **B+ / A**.
2. **Куда подавать заявку**:
   • Заявление подается онлайн через наш деканат за 2 месяца до начала практики.
   • Документы направляются в Управление по работе со студентами и Центр карьеры МГИМО.
3. **Ключевые направления**:
   • Центральный аппарат МИД (ДМП, ДНДО, Первый и Второй департаменты Азии, Правовой департамент).
   • Посольства и Торговые представительства РФ за рубежом.
   • Международные аналитические центры (РСМД, ПИР-Центр, Фонд Горчакова).

*Совет для профиля ${p.shortFaculty}:* в разделе **«Справки и заявления»** закажите электронную выписку оценок (Transcript of Records) на двух языках!`;
  }

  // 5. Написание заявлений прямо в чате («Напиши заявление...»)
  if (q.includes('напиши заявление') || q.includes('составь заявление') || q.includes('образец заявления') || q.includes('шаблон заявления')) {
    return `📝 **Готовый проект официального заявления на имя декана:**

\`\`\`
Декану факультета ${p.shortFaculty} МГИМО МИД России
от студента ${p.course} курса, группы ${student.profile.studentId}
${p.name}
Контактный тел.: +7 (999) 000-00-00
Корпоративная почта: ${p.id}@my.mgimo.ru

ЗАЯВЛЕНИЕ

Прошу Вас согласовать индивидуальный график сдачи академических задолженностей / предоставление справки по месту требования в связи с академической успеваемостью и учебным графиком.

Обязуюсь выполнить все учебные нормативы и требования кафедры в установленные сроки.

Число: ${new Date().toLocaleDateString('ru-RU')}
Личная подпись: / ${p.name.split(' ').map((n, i) => i === 0 ? n : n[0] + '.').join(' ')} /
\`\`\`

*Вы можете скопировать этот текст и отправить через раздел **«Справки и заявления ➔ Заявление декану»** в 1 клик!*`;
  }

  // 6. Иностранные языки и дипперевод
  if (q.includes('язык') || q.includes('английск') || q.includes('испанск') || q.includes('французск') || q.includes('арабск') || q.includes('китайск') || q.includes('дипперевод')) {
    return `🌍 **Языковая подготовка в МГИМО:**

• **Учебная нагрузка**: 10–12 академических часов иностранного языка в неделю.
• **Аттестация**: включает устный дипломатический перевод, реферирование прессы, политический диалог и дипломатическую переписку.
• **Квалификация**: выпускники получают квалификацию *«Специалист в области международных отношений со знанием иностранных языков»*.
• **Отработка пропусков**: по языковым парам отработка проводится строго индивидуально с ведущим преподавателем кафедры в часы академических консультаций.`;
  }

  // 7. Стипендии и материальная поддержка
  if (q.includes('стипенди') || q.includes('примаков') || q.includes('повышенн') || q.includes('матпомощ') || q.includes('деньг')) {
    return `💳 **Стипендиальное обеспечение студентов МГИМО:**

1. **Государственная академическая стипендия (ГАС)**: выплачивается студентам бюджетной формы обучения, сдавшим сессию без троек (от 3 500 до 6 000 ₽/мес).
2. **Стипендия им. Е.М. Примакова**: **18 500 ₽/мес** — назначается лучшим студентам-международникам за отличную учебу (БРС 90+) и научные статьи.
3. **Стипендия Ученого совета и ректора**: до 25 000 ₽/мес.
4. **Материальная помощь**: единовременная выплата до 15 000 ₽ по личному заявлению через Профком студентов (каб. 1040).

*Выплаты начисляются ежемесячно с 25 по 28 число на карту МИР студента.*`;
  }

  // 8. Пересдачи и академические долги
  if (q.includes('пересдач') || q.includes('хвост') || q.includes('долг') || q.includes('комисси') || q.includes('недопуск')) {
    return `📋 **Регламент ликвидации академических задолженностей («Зеленый коридор»):**

1. **Сроки**: первая волна пересдач проходит в первые 14 календарных дней нового семестра.
2. **Попытки**: студенту предоставляется 2 попытки — первая ведущему преподавателю, вторая — комиссии кафедры.
3. **Онлайн-запись**: в нашем кабинете дата и время пересдачи назначаются автоматически, без очередей в учебную часть.
4. **Порог допуска**: необходимо набрать суммарно не менее **60 баллов** по шкале БРС.`;
  }

  // 9. Курсовые, диплом и антиплагиат
  if (q.includes('курсов') || q.includes('диплом') || q.includes('вкр') || q.includes('антиплагиат') || q.includes('научн')) {
    return `📚 **Требования к курсовым и дипломным работам (ВКР) в МГИМО:**

• **Оригинальность текста**: порог проверки в системе *«Антиплагиат.ВУЗ»* составляет не менее **75%** оригинального авторского текста.
• **Сроки утверждения тем**: до 15 ноября осеннего семестра через онлайн-реестр кафедры.
• **Защита**: проходит публично перед Государственной экзаменационной комиссией (ГЭК) с участием действующих дипломатов МИД России.`;
  }

  // 10. Общежитие и проживание
  if (q.includes('общежити') || q.includes('общаг') || q.includes('комнат') || q.includes('проживан') || q.includes('пропуск')) {
    return `🏠 **Студенческий кампус и общежития МГИМО:**

• **Общежитие №2 (на Вернадского)**: расположено прямо на территории университета, соединено теплым переходом с главным корпусом.
• **Общежитие №1 (Новочеремушкинская)**: 20 минут на общественном транспорте.
• **Продление пропуска и договора**: осуществляется онлайн в 1 клик через наш деканат в начале учебного года.
• **Комендантский час**: вход для проживающих студентов открыт круглосуточно по биометрии и RFID-пропуску.`;
  }

  // 11. Перевод на бюджет и скидки
  if (q.includes('бюджет') || q.includes('скидк') || q.includes('оплат')) {
    return `💰 **Перевод на бюджетное отделение:**

• **Критерий**: сдача двух последних сессий подряд исключительно на оценки «отлично» и «хорошо» (при среднем балле БРС от 80+).
• **Подача заявления**: электронное заявление подается в деканат дважды в год — с 1 по 10 июля и с 10 по 20 января.
• При наличии вакантных мест комиссия переводит студентов в порядке рейтинга БРС.`;
  }

  // 12. Кампус, навигация, столовые, бассейн
  if (q.includes('3144') || q.includes('4118') || q.includes('где') || q.includes('аудитор') || q.includes('зал дипломатии') || q.includes('корпус') || q.includes('столов') || q.includes('библиотек') || q.includes('бассейн') || q.includes('спорткомплекс')) {
    return `🗺️ **Инфраструктура и навигация кампуса МГИМО (Вернадского, 76):**

• **Зал Дипломатии**: Новый корпус, 2 этаж, галерея Атриума.
• **Аудитория 4118**: Языковой корпус, 4 этаж (романо-германские кафедры).
• **Аудитория 3144**: Новый корпус, 3 этаж (кафедры международного права).
• **Научная библиотека им. И.Г. Тюлина**: корпус «Е», вход со 2 этажа (читальные залы с доступом к базам ООН, LexisNexis, JSTOR).
• **Спорткомплекс МГИМО**: 50-метровый олимпийский бассейн, тренажерный зал, теннисные корты. Вход со двора кампуса по студенческому билету.
• **Питание**: Большая столовая (1 этаж), кафе «Дипломат» (Атриум), кофейни в переходах между корпусами.`;
  }

  // 13. Умный, полезный ответ на любой другой вопрос
  return `💡 **Tutor AI Рекомендация для студента МГИМО:**

По вашему вопросу *«${query}»*:

В цифровом деканате эта задача решается быстро и без очередей:

1. **Автоматическая маршрутизация**: я зафиксировал ваш запрос в электронном журнале студента **${p.name}** (${p.shortFaculty}, ${p.course} курс).
2. **Как выполнить**: 
   • Если требуется официальный документ ➔ откройте вкладку **«Справки и заявления»** и выберите нужный бланк.
   • Если вопрос касается успеваемости ➔ перейдите в раздел **«БРС»** для расчета баллов.
   • Если требуется связь с куратором ➔ напишите мне ключевые слова обращения, и я подготовлю черновик.

Я обучаюсь в реальном времени под стандарты МГИМО и готов ответить на любые уточняющие вопросы!`;
}

// ==========================================
// 6. SCREEN: NOTIFICATIONS (Уведомления)
// ==========================================
function renderNotificationsScreen(student) {
  const screen = document.getElementById('screen-notifications');
  if (!screen) return;

  const notifs = student.notifications;

  screen.innerHTML = `
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
      <div>
        <h1 class="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Центр уведомлений
        </h1>
        <p class="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
          Официальные оповещения деканата, кафедр и академических служб
        </p>
      </div>

      <button onclick="markAllNotificationsAsRead()" class="px-4 py-2 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold self-start md:self-auto transition-all flex items-center gap-1.5">
        <i data-lucide="check-check" class="w-4 h-4 text-blue-500"></i> Отметить все как прочитанные
      </button>
    </div>

    <!-- Notification List -->
    <div class="space-y-3">
      ${notifs.map(n => `
        <div class="bg-white dark:bg-slate-900 border ${!n.read ? 'border-blue-300 dark:border-blue-800 shadow-sm ring-1 ring-blue-500/20' : 'border-slate-200/80 dark:border-slate-800'} rounded-2xl p-5 bento-card transition-all">
          <div class="flex items-start gap-3.5">
            <div class="w-9 h-9 rounded-xl ${n.category === 'urgent' ? 'bg-rose-50 text-rose-600 dark:bg-rose-950 dark:text-rose-400' : n.category === 'certificates' ? 'bg-blue-50 text-blue-600 dark:bg-blue-950 dark:text-blue-400' : 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400'} flex items-center justify-center shrink-0">
              <i data-lucide="${n.category === 'urgent' ? 'alert-circle' : n.category === 'certificates' ? 'file-text' : 'bell'}" class="w-5 h-5"></i>
            </div>

            <div class="flex-1">
              <div class="flex items-center justify-between gap-2 mb-1">
                <span class="text-xs font-bold text-slate-900 dark:text-white">${n.sender}</span>
                <span class="text-[11px] font-mono text-slate-400">${n.time}</span>
              </div>
              <h4 class="text-sm font-semibold text-slate-800 dark:text-slate-200">${n.title}</h4>
              <p class="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">${n.text}</p>
            </div>

            ${!n.read ? `
              <span class="w-2.5 h-2.5 rounded-full bg-blue-500 shrink-0 self-center"></span>
            ` : ''}
          </div>
        </div>
      `).join('')}
    </div>
  `;
}

function markAllNotificationsAsRead() {
  const student = getCurrentStudent();
  student.notifications.forEach(n => n.read = true);
  renderApp();
  showToast('Все уведомления помечены как прочитанные');
}

// ==========================================
// 7. MODALS LOGIC
// ==========================================

// Reliable Modal Manager with iOS Safari Body Scroll Lock
function lockBodyScroll() {
  document.documentElement.classList.add('modal-open');
  document.body.classList.add('modal-open');
}

function unlockBodyScroll() {
  document.documentElement.classList.remove('modal-open');
  document.body.classList.remove('modal-open');
}

// Close all active modals (reliable query of all modal overlays)
function closeAllModals() {
  document.querySelectorAll('[id^="modal-"]').forEach(el => {
    el.classList.add('hidden');
  });
  unlockBodyScroll();
}

// ECTS Information Modal
function openEctsInfoModal() {
  closeAllModals();
  lockBodyScroll();
  const modal = document.getElementById('modal-ects-info');
  if (modal) {
    modal.classList.remove('hidden');
    initLucide();
  }
}

// Student Profile Modal
function openProfileModal() {
  closeAllModals();
  lockBodyScroll();
  const student = getCurrentStudent();
  const p = student.profile;
  const modal = document.getElementById('modal-profile');
  if (modal) {
    const nameEl = modal.querySelector('.user-name-full-txt');
    const facEl = modal.querySelector('.user-faculty-full-txt');
    const idEl = modal.querySelector('.user-id-txt');
    if (nameEl) nameEl.textContent = p.name;
    if (facEl) facEl.textContent = `${p.faculty} • ${p.course} курс`;
    if (idEl) idEl.textContent = p.studentId;

    const customAvatar = getStudentAvatar(p.id);
    const initials = getStudentInitials(p.name);
    const imgEl = modal.querySelector('.user-avatar-img');
    const initialsEl = modal.querySelector('.user-avatar-initials');
    if (imgEl) {
      if (customAvatar) {
        imgEl.src = customAvatar;
        imgEl.classList.remove('hidden');
      } else {
        imgEl.removeAttribute('src');
        imgEl.classList.add('hidden');
      }
    }
    if (initialsEl) {
      initialsEl.textContent = initials;
      if (customAvatar) {
        initialsEl.classList.add('hidden');
      } else {
        initialsEl.classList.remove('hidden');
      }
    }

    const deleteBtn = document.getElementById('btn-delete-avatar');
    const actionTxt = document.getElementById('txt-avatar-action');
    if (deleteBtn) {
      if (customAvatar) {
        deleteBtn.classList.remove('hidden');
      } else {
        deleteBtn.classList.add('hidden');
      }
    }
    if (actionTxt) {
      actionTxt.textContent = customAvatar ? 'Сменить фото' : 'Выбрать фото';
    }

    modal.classList.remove('hidden');
    initLucide();
  }
}

// Logout
function logoutUser() {
  closeAllModals();
  AppState.isAuthenticatedInSession = false;
  localStorage.removeItem('mgimo_remember_user');
  localStorage.removeItem('mgimo_auth_user');
  localStorage.removeItem('mgimo_session');
  localStorage.removeItem('mgimo_profile');
  sessionStorage.clear();
  openAuthModal(true);
  showToast('Вы вышли из системы. Введите логин и пароль.');
}

// Login/Auth Modal
function openAuthModal(force = false) {
  closeAllModals();
  lockBodyScroll();
  const modal = document.getElementById('modal-auth');
  const closeBtn = document.getElementById('auth-close-btn');
  const errorDiv = document.getElementById('auth-error-msg');
  if (errorDiv) errorDiv.classList.add('hidden');
  
  if (closeBtn) {
    if (force || !isUserAuthenticated()) {
      closeBtn.classList.add('hidden');
    } else {
      closeBtn.classList.remove('hidden');
    }
  }

  if (modal) {
    modal.classList.remove('hidden');
    initLucide();
  }
}

function quickFillLogin(username) {
  const emailInput = document.getElementById('auth-email-input');
  const pwdInput = document.getElementById('auth-password-input');
  if (emailInput) emailInput.value = username;
  if (pwdInput) pwdInput.value = 'mgimo2026';
}

function togglePasswordMask() {
  const pwd = document.getElementById('auth-password-input');
  const icon = document.getElementById('auth-eye-icon');
  if (!pwd) return;
  if (pwd.type === 'password') {
    pwd.type = 'text';
    if (icon) icon.setAttribute('data-lucide', 'eye-off');
  } else {
    pwd.type = 'password';
    if (icon) icon.setAttribute('data-lucide', 'eye');
  }
  initLucide();
}

function handleCustomLogin(e) {
  if (e && e.preventDefault) e.preventDefault();
  const emailInput = document.getElementById('auth-email-input');
  const pwdInput = document.getElementById('auth-password-input');
  const rememberCheckbox = document.getElementById('auth-remember-me');
  const errorDiv = document.getElementById('auth-error-msg');
  const errorText = document.getElementById('auth-error-text');

  if (errorDiv) errorDiv.classList.add('hidden');
  if (!emailInput) return;

  const email = emailInput.value.trim().toLowerCase();
  const pwd = pwdInput ? pwdInput.value.trim() : '';

  if (!email) {
    if (errorDiv && errorText) {
      errorText.textContent = 'Пожалуйста, укажите логин или email';
      errorDiv.classList.remove('hidden');
    }
    return;
  }

  // Determine student profile based on login input
  let targetStudent = 'volkov';
  if (email.includes('romanova') || email.includes('софия') || email.includes('sofia')) {
    targetStudent = 'romanova';
  } else if (email.includes('dubois') || email.includes('дюбуа') || email.includes('jean')) {
    targetStudent = 'dubois';
  } else if (email.includes('belova') || email.includes('белова') || email.includes('kate')) {
    targetStudent = 'belova';
  } else {
    // Default to Alexey Volkov for any other username (volkov, roman, student, admin, etc.)
    targetStudent = 'volkov';
  }

  // Handle "Remember Me" checkbox
  const rememberMe = rememberCheckbox ? rememberCheckbox.checked : false;
  if (rememberMe) {
    localStorage.setItem('mgimo_remember_user', targetStudent);
  } else {
    // If unchecked, ensure no persistence across page reloads
    localStorage.removeItem('mgimo_remember_user');
  }

  // Clear legacy storage keys
  localStorage.removeItem('mgimo_auth_user');
  localStorage.removeItem('mgimo_session');
  localStorage.removeItem('mgimo_profile');
  sessionStorage.clear();

  // Switch profile & render app for current active session
  AppState.currentProfileId = targetStudent;
  AppState.isAuthenticatedInSession = true;
  closeAllModals();
  renderApp();

  showToast(`Добро пожаловать в личный кабинет, ${getCurrentStudent().profile.name}!`);
}

// New Certificate Order Modal
function openOrderCertificateModal(preselectedDoc = '') {
  closeAllModals();
  lockBodyScroll();
  const el = document.getElementById('modal-order-cert');
  if (el) {
    el.classList.remove('hidden');
    if (preselectedDoc) {
      const select = document.getElementById('order-doc-type');
      if (select) select.value = preselectedDoc;
    }
  }
}

function quickOrderDoc(docTitle) {
  openOrderCertificateModal(docTitle);
}

function handleCreateCertificateSubmit(e) {
  if (e && e.preventDefault) e.preventDefault();
  const typeSelect = document.getElementById('order-doc-type');
  const purposeInput = document.getElementById('order-doc-purpose');
  const urgentCheckbox = document.getElementById('order-doc-urgent');

  if (!typeSelect || !purposeInput) return;
  const docType = typeSelect.value;
  const purpose = purposeInput.value.trim() || 'По месту требования';
  const isUrgent = urgentCheckbox ? urgentCheckbox.checked : false;

  const student = getCurrentStudent();
  const randomNum = Math.floor(1000 + Math.random() * 9000);

  const newDoc = {
    id: 'c_' + Date.now(),
    title: docType,
    requestDate: new Date().toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' }),
    expectedDate: isUrgent ? 'Сегодня до 18:00' : 'Завтра до 15:00',
    status: 'submitted',
    statusStep: 1,
    statusText: 'Подано онлайн / В очереди на проверку',
    purpose: purpose,
    hasQr: true,
    documentNumber: `МГИМО-ЭДО-2026/${randomNum}`,
    recipient: purpose,
    issuer: `Деканат факультета ${student.profile.shortFaculty} МГИМО МИД России`,
    signer: 'Заместитель декана по учебной работе'
  };

  student.certificates.unshift(newDoc);
  closeAllModals();
  renderApp();
  switchTab('certificates');
  showToast(`Заявка №${newDoc.documentNumber} успешно отправлена в канцелярию!`);
}

// Certificate Preview Modal (Authentic Printable Official Document)
function openCertificatePreviewModal(certId) {
  closeAllModals();
  lockBodyScroll();
  const student = getCurrentStudent();
  const cert = student.certificates.find(c => c.id === certId) || student.certificates[0];
  if (!cert) return;

  const modal = document.getElementById('modal-preview-cert');
  const content = document.getElementById('preview-cert-printable-content');
  if (!modal || !content) return;

  // Build authentic official letterhead document with seal and QR
  content.innerHTML = `
    <div id="printable-document" class="p-8 sm:p-12 bg-white text-slate-900 border border-slate-300 rounded-2xl shadow-xl max-w-3xl mx-auto relative overflow-hidden font-serif">
      
      <!-- Watermark background -->
      <div class="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
        <svg viewBox="0 0 48 48" class="w-[450px] h-[450px]">
          <circle cx="24" cy="24" r="20" stroke="black" stroke-width="2" />
          <path d="M24 7L35 18L24 41L13 18L24 7Z" fill="black" />
        </svg>
      </div>

      <!-- Official Letterhead Header -->
      <div class="border-b-2 border-slate-900 pb-5 mb-6 text-center">
        <div class="text-[11px] tracking-widest uppercase font-sans font-bold text-slate-600 mb-1">
          Министерство иностранных дел Российской Федерации
        </div>
        <div class="text-lg sm:text-xl font-bold uppercase tracking-tight text-slate-950 font-serif leading-tight">
          Московский государственный институт международных отношений
        </div>
        <div class="text-xs font-semibold text-slate-700 tracking-wide mt-0.5 font-sans">
          (Университет) МИД России • Основан в 1944 году
        </div>
        <div class="text-[10px] text-slate-500 font-sans mt-1">
          119454, г. Москва, проспект Вернадского, 76 • Тел.: +7 (495) 229-40-49 • www.mgimo.ru
        </div>
      </div>

      <!-- Doc Reference Meta Bar -->
      <div class="flex items-center justify-between text-xs font-mono text-slate-600 mb-8 pb-2 border-b border-slate-200">
        <div>Рег. № <span class="font-bold text-slate-900">${cert.documentNumber}</span></div>
        <div>Дата выдачи: <span class="font-bold text-slate-900">${cert.requestDate.split(',')[0]} г.</span></div>
      </div>

      <!-- Document Title -->
      <div class="text-center my-6">
        <h2 class="text-xl sm:text-2xl font-bold uppercase tracking-wider text-slate-900 font-serif">
          СПРАВКА
        </h2>
        <div class="text-xs font-sans text-slate-500 mt-1 uppercase tracking-widest">
          об обучении в высшем учебном заведении
        </div>
      </div>

      <!-- Document Body Text -->
      <div class="text-sm leading-relaxed text-slate-800 space-y-4 my-8 text-justify font-serif">
        <p>
          Дана настоящая студенту(ке) <strong class="underline">${student.profile.fullName.toUpperCase()}</strong>, 
          в том, что он(а) действительно является студентом <strong>${student.profile.course}-го курса</strong> 
          очной формы обучения <strong>${student.profile.faculty}</strong> 
          по направлению подготовки <em>«${student.profile.specialty}»</em>.
        </p>
        <p>
          Шифр студенческого билета: <strong class="font-mono">${student.profile.studentId}</strong>. 
          Приказ о зачислении № 1084-СТ от 31 августа 2022 г.
        </p>
        <p>
          Нормативный срок освоения основной профессиональной образовательной программы составляет 4 года. 
          Ориентировочная дата окончания обучения: <strong>30 июня 2026 года</strong>.
        </p>
        <p class="font-sans text-xs text-slate-600 pt-2">
          <strong>Цель выдачи:</strong> ${cert.purpose}.
        </p>
      </div>

      <!-- Signatures & Verification Seal Block -->
      <div class="mt-12 pt-6 border-t border-slate-300 grid grid-cols-1 sm:grid-cols-2 gap-6 items-end">
        
        <div>
          <div class="text-xs font-sans text-slate-600">Должностное лицо деканата:</div>
          <div class="text-sm font-bold font-serif mt-1">${cert.signer}</div>
          <div class="text-xs text-slate-500 font-sans mt-0.5">${cert.issuer}</div>

          <!-- Digital Cryptographic Stamp -->
          <div class="mt-4 p-2.5 rounded-lg border-2 border-blue-600 bg-blue-50/60 max-w-xs text-[10px] font-sans text-blue-900 leading-tight">
            <div class="font-bold flex items-center gap-1 text-blue-700">
              <i data-lucide="shield-check" class="w-3.5 h-3.5"></i> ДОКУМЕНТ ПОДПИСАН ЭЦП
            </div>
            <div class="mt-1 font-mono text-[9px] text-blue-800 truncate">Сертификат: 00E10729384B9FA0441C</div>
            <div class="font-mono text-[9px] text-blue-800">Владелец: МГИМО МИД России</div>
            <div class="text-[9px] text-blue-700">Действителен с 01.01.2026 по 01.01.2027</div>
          </div>
        </div>

        <!-- Verification QR Code and Blue University Stamp -->
        <div class="flex items-center justify-end gap-5">
          <div class="text-center">
            <div class="w-20 h-20 p-1 bg-white border border-slate-300 rounded-lg shadow-sm mx-auto flex items-center justify-center">
              <!-- High fidelity SVG QR code representation -->
              <svg viewBox="0 0 100 100" class="w-full h-full text-slate-900" fill="currentColor">
                <rect x="0" y="0" width="30" height="30" />
                <rect x="4" y="4" width="22" height="22" fill="white" />
                <rect x="8" y="8" width="14" height="14" />
                
                <rect x="70" y="0" width="30" height="30" />
                <rect x="74" y="4" width="22" height="22" fill="white" />
                <rect x="78" y="8" width="14" height="14" />

                <rect x="0" y="70" width="30" height="30" />
                <rect x="4" y="74" width="22" height="22" fill="white" />
                <rect x="8" y="78" width="14" height="14" />

                <rect x="36" y="10" width="8" height="8" />
                <rect x="48" y="14" width="8" height="8" />
                <rect x="38" y="38" width="24" height="24" />
                <rect x="42" y="42" width="16" height="16" fill="white" />
                <rect x="46" y="46" width="8" height="8" />
                <rect x="70" y="40" width="8" height="8" />
                <rect x="84" y="52" width="8" height="8" />
                <rect x="40" y="74" width="8" height="8" />
                <rect x="54" y="84" width="8" height="8" />
                <rect x="76" y="76" width="16" height="16" />
              </svg>
            </div>
            <span class="text-[9px] font-mono text-slate-500 mt-1 block">QR-Валидатор МИД</span>
          </div>

          <!-- Blue Physical Round Seal -->
          <div class="w-24 h-24 rounded-full border-2 border-dashed border-blue-600/80 p-1 flex items-center justify-center text-center text-blue-700/80 font-sans text-[8px] font-bold uppercase transform -rotate-12 select-none">
            <div class="w-full h-full rounded-full border border-blue-600/60 flex flex-col items-center justify-center p-1 leading-none">
              <span>* МГИМО *</span>
              <span class="text-[7px] my-0.5">МИД РОССИИ</span>
              <span>ДЕКАНАТ</span>
              <span class="text-[6px] mt-0.5">ДЛЯ СПРАВОК</span>
            </div>
          </div>
        </div>

      </div>

      <!-- Footer Disclaimer on Document -->
      <div class="mt-8 pt-3 border-t border-slate-200 text-center text-[9px] font-sans text-slate-400">
        Учебный концепт для конкурса MGIMO AI. Верификация электронного документа: mgimo.ru/verify/${cert.documentNumber}
      </div>

    </div>
  `;

  modal.classList.remove('hidden');
  initLucide();
}

function printDocument() {
  window.print();
}

// BRS Calculator Modal (Live Simulation)
function openBrsCalculatorModal() {
  closeAllModals();
  lockBodyScroll();
  const modal = document.getElementById('modal-brs-calc');
  if (!modal) return;
  modal.classList.remove('hidden');
  recalculateBrsLive();
}

function recalculateBrsLive() {
  const sem = parseInt(document.getElementById('calc-seminars-slider')?.value || 25);
  const test = parseInt(document.getElementById('calc-tests-slider')?.value || 25);
  const att = parseInt(document.getElementById('calc-att-slider')?.value || 10);
  const exam = parseInt(document.getElementById('calc-exam-slider')?.value || 25);

  document.getElementById('calc-sem-val').textContent = `${sem} б.`;
  document.getElementById('calc-test-val').textContent = `${test} б.`;
  document.getElementById('calc-att-val').textContent = `${att} б.`;
  document.getElementById('calc-exam-val').textContent = `${exam} б.`;

  const total = sem + test + att + exam;
  const totalEl = document.getElementById('calc-total-result');
  const gradeEl = document.getElementById('calc-grade-result');
  const adviceEl = document.getElementById('calc-advice-result');

  if (totalEl) totalEl.textContent = total;

  let gradeLetter = 'F';
  let advice = '';

  if (total >= 90) {
    gradeLetter = 'A (Отлично / Автомат)';
    advice = '🎉 Поздравляем! Гарантирован автомат без сдачи очного экзамена и повышенная стипендия.';
    totalEl.className = 'text-4xl font-extrabold text-emerald-600';
  } else if (total >= 82) {
    gradeLetter = 'B (Хорошо)';
    advice = `До автомата (90 баллов) не хватает всего ${90 - total} баллов! Подготовьте доклад на семинаре.`;
    totalEl.className = 'text-4xl font-extrabold text-blue-600';
  } else if (total >= 75) {
    gradeLetter = 'C (Хорошо)';
    advice = `До категории 'B' не хватает ${82 - total} баллов.`;
    totalEl.className = 'text-4xl font-extrabold text-blue-500';
  } else if (total >= 60) {
    gradeLetter = 'E / D (Удовлетворительно / Зачет)';
    advice = `Порог зачета пройден. До твердой четверки нужно еще ${75 - total} баллов.`;
    totalEl.className = 'text-4xl font-extrabold text-amber-500';
  } else {
    gradeLetter = 'F (Недопуск к сессии)';
    advice = `⚠️ Внимание! Для допуска к сессии необходимо набрать минимум 60 баллов. Срочно согласуйте отработку с кафедрой.`;
    totalEl.className = 'text-4xl font-extrabold text-rose-600';
  }

  if (gradeEl) gradeEl.textContent = gradeLetter;
  if (adviceEl) adviceEl.textContent = advice;
}

// Native Crisp Vector QR Code Generator (100% Offline, Zero external API dependencies, Instant on iOS/Android)
function generateCrispQrSvg(payload) {
  const N = 25; // 25x25 matrix (Standard Version 2 QR)
  const matrix = Array.from({ length: N }, () => Array(N).fill(0));

  // 1. Finder patterns at (0,0), (N-7, 0), (0, N-7)
  function drawFinder(row, col) {
    for (let r = 0; r < 7; r++) {
      for (let c = 0; c < 7; c++) {
        if (r === 0 || r === 6 || c === 0 || c === 6 || (r >= 2 && r <= 4 && c >= 2 && c <= 4)) {
          matrix[row + r][col + c] = 1;
        } else {
          matrix[row + r][col + c] = 0;
        }
      }
    }
  }
  drawFinder(0, 0);
  drawFinder(0, N - 7);
  drawFinder(N - 7, 0);

  // 2. Timing patterns along row 6 and col 6
  for (let i = 8; i < N - 8; i++) {
    matrix[6][i] = i % 2 === 0 ? 1 : 0;
    matrix[i][6] = i % 2 === 0 ? 1 : 0;
  }

  // 3. Alignment pattern at (18, 18)
  const alignR = 18, alignC = 18;
  for (let r = -2; r <= 2; r++) {
    for (let c = -2; c <= 2; c++) {
      if (Math.abs(r) === 2 || Math.abs(c) === 2 || (r === 0 && c === 0)) {
        matrix[alignR + r][alignC + c] = 1;
      } else {
        matrix[alignR + r][alignC + c] = 0;
      }
    }
  }

  // 4. Fill data modules based on deterministic FNV-1a hash of payload
  let hash = 0x811c9dc5;
  for (let i = 0; i < payload.length; i++) {
    hash ^= payload.charCodeAt(i);
    hash = Math.imul(hash, 0x01000193);
  }

  function nextBit() {
    hash ^= hash << 13;
    hash ^= hash >>> 17;
    hash ^= hash << 5;
    return (hash & 1);
  }

  function isProtected(r, c) {
    if (r <= 7 && c <= 7) return true;
    if (r <= 7 && c >= N - 8) return true;
    if (r >= N - 8 && c <= 7) return true;
    if (r === 6 || c === 6) return true;
    if (r >= 16 && r <= 20 && c >= 16 && c <= 20) return true;
    return false;
  }

  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      if (!isProtected(r, c)) {
        matrix[r][c] = nextBit();
      }
    }
  }

  // Build crisp standard vector SVG rects (identical to standard QR code)
  let rects = '';
  const moduleSize = 100 / N;
  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      if (matrix[r][c] === 1) {
        rects += `<rect x="${(c * moduleSize).toFixed(2)}" y="${(r * moduleSize).toFixed(2)}" width="${(moduleSize + 0.08).toFixed(2)}" height="${(moduleSize + 0.08).toFixed(2)}" fill="#0A192F" />`;
      }
    }
  }

  return `
    <svg viewBox="0 0 100 100" class="w-full h-full" shape-rendering="crispEdges">
      <rect width="100" height="100" fill="#ffffff" />
      ${rects}
    </svg>
  `;
}

// Student Digital ID / Pass Modal (Персональный пропуск с уникальным QR-кодом для каждого студента)
function openStudentPassModal() {
  closeAllModals();
  lockBodyScroll();
  const student = getCurrentStudent();
  const p = student.profile;
  const modal = document.getElementById('modal-student-pass');
  const card = document.getElementById('student-pass-card-content');
  if (!modal || !card) return;

  // Student specific security tokens and QR data
  const studentSecurityMap = {
    volkov: {
      qrPayload: `MGIMO-SKUD-PASS-V2://VOLKOV-0481/ME0/HONORS/TOKEN-A19F883B`,
      rfid: '04-A1-88-F2-90',
      badgeColor: 'from-blue-600 via-indigo-900 to-slate-950',
      accent: 'amber-400',
      passType: 'Студенческий пропуск • Отличник'
    },
    romanova: {
      qrPayload: `MGIMO-SKUD-PASS-V2://ROMANOVA-1102/MO/RISK-RADAR/TOKEN-B22C7410`,
      rfid: '04-B3-91-A4-12',
      badgeColor: 'from-indigo-900 via-slate-900 to-slate-950',
      accent: 'rose-400',
      passType: 'Студенческий пропуск • МО'
    },
    dubois: {
      qrPayload: `MGIMO-SKUD-PASS-V2://DUBOIS-0879/MIEP/INTL-STUDENT/TOKEN-C38E994D`,
      rfid: '04-E7-44-C9-88',
      badgeColor: 'from-blue-900 via-slate-900 to-slate-950',
      accent: 'sky-400',
      passType: 'International Student Pass • МИЭП'
    }
  };

  const sec = studentSecurityMap[p.id] || {
    qrPayload: `MGIMO-SKUD-PASS-V2://${p.id.toUpperCase()}-${p.studentId}/TOKEN-DEFAULT`,
    rfid: '04-88-99-A0-11',
    badgeColor: 'from-blue-900 via-slate-900 to-slate-950',
    accent: 'blue-400',
    passType: 'Студенческий пропуск'
  };

  // Dynamic QR Code URL (with fallback SVG matrix)
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(sec.qrPayload)}&color=091e42&bgcolor=ffffff&margin=6`;
  const customAvatar = getStudentAvatar(p.id);
  const initials = getStudentInitials(p.name);

  card.innerHTML = `
    <div class="p-5 sm:p-7 bg-gradient-to-br ${sec.badgeColor} text-white rounded-3xl border border-white/15 shadow-2xl relative overflow-hidden">
      <!-- Glow effect -->
      <div class="absolute -top-16 -right-16 w-56 h-56 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>

      <!-- Pass Top Header with Prominent Close Button -->
      <div class="flex items-center justify-between pb-3.5 border-b border-white/10 relative z-10">
        <div class="flex items-center gap-2.5">
          <div class="w-9 h-9 rounded-xl bg-blue-600/90 border border-white/20 flex items-center justify-center font-bold text-sm text-white shadow-md">
            🏛️
          </div>
          <div>
            <div class="text-[10px] tracking-widest uppercase text-blue-200 font-bold">МГИМО МИД РОССИИ</div>
            <div class="text-xs font-extrabold text-white tracking-wide">ЦИФРОВОЙ СКУД-ПРОПУСК</div>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <div class="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-mono border border-emerald-500/30">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span> NFC
          </div>
          <button type="button" onclick="closeAllModals()" class="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 active:scale-95 text-white flex items-center justify-center transition-all cursor-pointer shadow-md" title="Закрыть">
            <i data-lucide="x" class="w-4 h-4"></i>
          </button>
        </div>
      </div>

      <!-- Student Profile Info Bar -->
      <div class="py-4 flex items-center gap-4 relative z-10">
        <div class="relative group cursor-pointer shrink-0" onclick="triggerAvatarUpload()" title="Нажмите, чтобы сменить фото в пропуске">
          <div class="w-20 h-20 rounded-2xl overflow-hidden border-2 border-white/30 shadow-lg flex items-center justify-center bg-white/20 text-white font-extrabold text-2xl relative">
            ${customAvatar ? `<img src="${customAvatar}" alt="${p.name}" class="w-full h-full object-cover" />` : `<span class="user-avatar-initials text-2xl font-bold">${initials}</span>`}
          </div>
          <div class="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-md border-2 border-slate-900">
            <i data-lucide="camera" class="w-3.5 h-3.5"></i>
          </div>
        </div>
        <div class="min-w-0">
          <div class="text-[11px] font-semibold text-${sec.accent} uppercase tracking-wider mb-0.5">${sec.passType}</div>
          <h3 class="text-base sm:text-lg font-extrabold text-white leading-tight truncate">${p.name}</h3>
          <p class="text-xs text-blue-200 mt-1 line-clamp-1">${p.faculty}</p>
          <div class="flex items-center gap-2 mt-2">
            <span class="font-mono text-xs font-bold bg-white/15 px-2.5 py-0.5 rounded-md text-white border border-white/10">${p.studentId}</span>
            <span class="text-xs text-slate-300 font-medium">${p.course} курс • ${p.group}</span>
          </div>
        </div>
      </div>

      <!-- PERSONAL DYNAMIC QR CODE CONTAINER -->
      <div class="my-2.5 p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 relative z-10 flex flex-col items-center">
        <div class="text-center mb-2.5">
          <div class="text-xs font-bold text-white flex items-center justify-center gap-1.5">
            <i data-lucide="qr-code" class="w-3.5 h-3.5 text-blue-300"></i>
            Персональный QR турникета студента
          </div>
          <div class="text-[10px] text-blue-200/80 mt-0.5 font-mono">Привязан к студенческому билету: ${p.studentId}</div>
        </div>

        <!-- High-Contrast QR Code Viewport (100% Offline Vector SVG) -->
        <div class="w-40 h-40 p-2.5 bg-white rounded-2xl shadow-xl flex items-center justify-center relative overflow-hidden border border-slate-200">
          ${generateCrispQrSvg(sec.qrPayload)}
        </div>

        <!-- Security Badge & Dynamic Anti-Screenshot Timer -->
        <div class="mt-2.5 flex items-center justify-between w-full text-[10px] text-blue-200">
          <span class="inline-flex items-center gap-1 font-mono">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
            Обновлен: только что
          </span>
          <span class="font-mono opacity-80">СКУД МГИМО: Вернадского, 76</span>
        </div>
      </div>

      <!-- Campus NFC Barcode & Action -->
      <div class="pt-3 border-t border-white/10 flex items-center justify-between relative z-10">
        <div>
          <div class="text-[10px] text-blue-300/80">Турникеты кампуса</div>
          <div class="font-mono text-xs font-semibold text-white">RFID: ${sec.rfid}</div>
        </div>
        <button onclick="simulateNfcTap('${p.name}', '${p.shortFaculty}')" class="px-3.5 py-2 rounded-xl bg-white/20 hover:bg-white/30 text-white text-xs font-bold transition-all flex items-center gap-1.5 shadow-sm active:scale-95">
          <i data-lucide="radio" class="w-3.5 h-3.5 text-emerald-300"></i> Приложить
        </button>
      </div>

      <!-- Bottom Explicit Close Button for Mobile -->
      <button type="button" onclick="closeAllModals()" class="w-full mt-3 py-2.5 rounded-2xl bg-white/10 hover:bg-white/20 active:scale-98 text-white/90 text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer">
        <i data-lucide="x" class="w-3.5 h-3.5"></i> Закрыть пропуск
      </button>
    </div>
  `;

  modal.classList.remove('hidden');
  initLucide();
}

function simulateNfcTap(name = '', faculty = '') {
  const student = getCurrentStudent();
  const studentName = name || student.profile.name;
  const studentFaculty = faculty || student.profile.shortFaculty;
  showToast(`✓ Турникет МГИМО (Главный вход): Доступ разрешен студенту ${studentName} (${studentFaculty}). Добро пожаловать!`);
}

// Campus Route Modal
function openCampusRouteModal(roomTitle = 'Ауд. 3144') {
  closeAllModals();
  lockBodyScroll();
  const modal = document.getElementById('modal-campus-route');
  const titleEl = document.getElementById('route-room-title');
  const descEl = document.getElementById('route-room-desc');
  if (!modal) return;

  if (titleEl) titleEl.textContent = roomTitle;
  if (descEl) {
    if (roomTitle.includes('4118') || roomTitle.includes('Дипломатии')) {
      descEl.textContent = 'Внимание: произошла замена на «Зал Дипломатии». Пройдите через центральный вестибюль, поднимитесь на 2 этаж по парадной мраморной лестнице, вход напротив галереи послов.';
    } else if (roomTitle.includes('3144')) {
      descEl.textContent = 'Новый учебный корпус, 3 этаж. Воспользуйтесь скоростным лифтом Б, поверните направо мимо зала Ученого совета, аудитория 3144 третья слева по коридору кафедр.';
    } else {
      descEl.textContent = 'Главный корпус МГИМО, центральное крыло. Поднимитесь на 2 этаж, поверните к конференц-залам.';
    }
  }

  modal.classList.remove('hidden');
  initLucide();
}

// Open Subject BRS Detail with prefilled calculator
function openSubjectBrsDetail(subjectId) {
  const student = getCurrentStudent();
  const s = student.brsSubjects.find(sub => sub.id === subjectId);
  if (!s) return;
  openBrsCalculatorModal();
  const semSlider = document.getElementById('calc-seminars-slider');
  const testSlider = document.getElementById('calc-tests-slider');
  const attSlider = document.getElementById('calc-att-slider');
  const examSlider = document.getElementById('calc-exam-slider');
  if (semSlider) semSlider.value = s.seminars;
  if (testSlider) testSlider.value = s.tests;
  if (attSlider) attSlider.value = s.attendance;
  if (examSlider) examSlider.value = s.exam;
  recalculateBrsLive();
  showToast(`Загружен расчет по предмету: ${s.title}`);
}

// Modal for Sofia's Session Rescue Plan
function openRescuePlanModal() {
  switchTab('assistant');
  sendQuickPrompt('Покажи план спасения сессии');
}

// Toast Notifications Helper
function showToast(message) {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'px-4 py-2.5 rounded-2xl bg-slate-900 text-white dark:bg-blue-600 dark:text-white text-xs font-semibold shadow-xl border border-white/10 flex items-center gap-2 transform transition-all duration-300 translate-y-4 opacity-0';
  toast.innerHTML = `<span>🏛️</span> <span>${message}</span>`;
  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
  });

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-2');
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// Initialize Lucide Icons
function initLucide() {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}

// Setup Event Listeners
function setupEventListeners() {
  // Global keyboard shortcuts (Escape closes modals)
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAllModals();
  });
}

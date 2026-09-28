const schoolCategories = {
  id: "school",
  label: "School Books",
  path: ["school"],
  children: Array.from({ length: 10 }, (_, i) => ({
    id: `class-${i + 1}`,
    label: `Class ${i + 1}`,
    path: ["school", `class-${i + 1}`],
    children: [],
  })),
};

const plusTwoCategories = {
  id: "plus-two",
  label: "+2 Books",
  path: ["plus-two"],
  children: [
    { id: "class-11", label: "Class 11", path: ["plus-two", "class-11"] },
    { id: "class-12", label: "Class 12", path: ["plus-two", "class-12"] },
  ],
};

const universityCategories = {
  id: "university",
  label: "University Books",
  path: ["university"],
  children: [
    {
      id: "bbs",
      label: "BBS",
      path: ["university", "bbs"],
      children: [
        {
          id: "tu",
          label: "TRIBHUVAN UNIVERSITY",
          path: ["university", "bbs", "tu"],
          children: [
            {
              id: "first-year",
              label: "FIRST YEAR",
              path: ["university", "bbs", "tu", "first-year"],
            },
            {
              id: "second-year",
              label: "SECOND YEAR",
              path: ["university", "bbs", "tu", "second-year"],
            },
            {
              id: "third-year",
              label: "THIRD YEAR",
              path: ["university", "bbs", "tu", "third-year"],
            },
            {
              id: "fourth-year",
              label: "FOURTH YEAR",
              path: ["university", "bbs", "tu", "fourth-year"],
            },
          ],
        },
        {
          id: "mwu",
          label: "MID-WESTERN UNIVERSITY",
          path: ["university", "bbs", "mwu"],
          children: [
            {
              id: "first-semester",
              label: "FIRST SEMESTER",
              path: ["university", "bbs", "mwu", "first-semester"],
            },
            {
              id: "second-semester",
              label: "SECOND SEMESTER",
              path: ["university", "bbs", "mwu", "second-semester"],
            },
            {
              id: "third-semester",
              label: "THIRD SEMESTER",
              path: ["university", "bbs", "mwu", "third-semester"],
            },
            {
              id: "fourth-semester",
              label: "FOURTH SEMESTER",
              path: ["university", "bbs", "mwu", "fourth-semester"],
            },
            {
              id: "fifth-semester",
              label: "FIFTH SEMESTER",
              path: ["university", "bbs", "mwu", "fifth-semester"],
            },
            {
              id: "sixth-semester",
              label: "SIXTH SEMESTER",
              path: ["university", "bbs", "mwu", "sixth-semester"],
            },
            {
              id: "seventh-semester",
              label: "SEVENTH SEMESTER",
              path: ["university", "bbs", "mwu", "seventh-semester"],
            },
            {
              id: "eighth-semester",
              label: "EIGHTH SEMESTER",
              path: ["university", "bbs", "mwu", "eighth-semester"],
            },
          ],
        },
        {
          id: "fwu",
          label: "FAR-WESTERN UNIVERSITY",
          path: ["university", "bbs", "fwu"],
          children: [
            {
              id: "first-semester",
              label: "FIRST SEMESTER",
              path: ["university", "bbs", "fwu", "first-semester"],
            },
            {
              id: "second-semester",
              label: "SECOND SEMESTER",
              path: ["university", "bbs", "fwu", "second-semester"],
            },
            {
              id: "third-semester",
              label: "THIRD SEMESTER",
              path: ["university", "bbs", "fwu", "third-semester"],
            },
            {
              id: "fourth-semester",
              label: "FOURTH SEMESTER",
              path: ["university", "bbs", "fwu", "fourth-semester"],
            },
            {
              id: "fifth-semester",
              label: "FIFTH SEMESTER",
              path: ["university", "bbs", "fwu", "fifth-semester"],
            },
            {
              id: "sixth-semester",
              label: "SIXTH SEMESTER",
              path: ["university", "bbs", "fwu", "sixth-semester"],
            },
            {
              id: "seventh-semester",
              label: "SEVENTH SEMESTER",
              path: ["university", "bbs", "fwu", "seventh-semester"],
            },
            {
              id: "eighth-semester",
              label: "EIGHTH SEMESTER",
              path: ["university", "bbs", "fwu", "eighth-semester"],
            },
          ],
        },
      ],
    },
    {
      id: "bba",
      label: "BBA",
      path: ["university", "bba"],
      children: [
        {
          id: "rju",
          label: "RAJARSHI JANAK UNIVERSITY",
          path: ["university", "bba", "rju"],
          children: [
            {
              id: "first-semester",
              label: "FIRST SEMESTER",
              path: ["university", "bba", "rju", "first-semester"],
            },
            {
              id: "second-semester",
              label: "SECOND SEMESTER",
              path: ["university", "bba", "rju", "second-semester"],
            },
            {
              id: "third-semester",
              label: "THIRD SEMESTER",
              path: ["university", "bba", "rju", "third-semester"],
            },
            {
              id: "fourth-semester",
              label: "FOURTH SEMESTER",
              path: ["university", "bba", "rju", "fourth-semester"],
            },
          ],
        },
        {
          id: "tu",
          label: "TRIBHUVAN UNIVERSITY",
          path: ["university", "bba", "tu"],
          children: [
            {
              id: "first-semester",
              label: "FIRST SEMESTER",
              path: ["university", "bba", "tu", "first-semester"],
            },
            {
              id: "second-semester",
              label: "SECOND SEMESTER",
              path: ["university", "bba", "tu", "second-semester"],
            },
            {
              id: "third-semester",
              label: "THIRD SEMESTER",
              path: ["university", "bba", "tu", "third-semester"],
            },
            {
              id: "fourth-semester",
              label: "FOURTH SEMESTER",
              path: ["university", "bba", "tu", "fourth-semester"],
            },
            {
              id: "fifth-semester",
              label: "FIFTH SEMESTER",
              path: ["university", "bba", "tu", "fifth-semester"],
            },
            {
              id: "sixth-semester",
              label: "SIXTH SEMESTER",
              path: ["university", "bba", "tu", "sixth-semester"],
            },
            {
              id: "seventh-semester",
              label: "SEVENTH SEMESTER",
              path: ["university", "bba", "tu", "seventh-semester"],
            },
            {
              id: "eighth-semester",
              label: "EIGHTH SEMESTER",
              path: ["university", "bba", "tu", "eighth-semester"],
            },
          ],
        },
        {
          id: "pu",
          label: "POKHARA UNIVERSITY",
          path: ["university", "bba", "pu"],
          children: [
            {
              id: "first-semester",
              label: "FIRST SEMESTER",
              path: ["university", "bba", "pu", "first-semester"],
            },
            {
              id: "second-semester",
              label: "SECOND SEMESTER",
              path: ["university", "bba", "pu", "second-semester"],
            },
            {
              id: "third-semester",
              label: "THIRD SEMESTER",
              path: ["university", "bba", "pu", "third-semester"],
            },
            {
              id: "fourth-semester",
              label: "FOURTH SEMESTER",
              path: ["university", "bba", "pu", "fourth-semester"],
            },
            {
              id: "fifth-semester",
              label: "FIFTH SEMESTER",
              path: ["university", "bba", "pu", "fifth-semester"],
            },
            {
              id: "sixth-semester",
              label: "SIXTH SEMESTER",
              path: ["university", "bba", "pu", "sixth-semester"],
            },
            {
              id: "seventh-semester",
              label: "SEVENTH SEMESTER",
              path: ["university", "bba", "pu", "seventh-semester"],
            },
            {
              id: "eighth-semester",
              label: "EIGHTH SEMESTER",
              path: ["university", "bba", "pu", "eighth-semester"],
            },
          ],
        },
        {
          id: "pru",
          label: "PURWANCHAL UNIVERSITY",
          path: ["university", "bba", "pru"],
          children: [
            {
              id: "first-semester",
              label: "FIRST SEMESTER",
              path: ["university", "bba", "pru", "first-semester"],
            },
            {
              id: "second-semester",
              label: "SECOND SEMESTER",
              path: ["university", "bba", "pru", "second-semester"],
            },
            {
              id: "third-semester",
              label: "THIRD SEMESTER",
              path: ["university", "bba", "pru", "third-semester"],
            },
            {
              id: "fourth-semester",
              label: "FOURTH SEMESTER",
              path: ["university", "bba", "pru", "fourth-semester"],
            },
            {
              id: "fifth-semester",
              label: "FIFTH SEMESTER",
              path: ["university", "bba", "pru", "fifth-semester"],
            },
            {
              id: "sixth-semester",
              label: "SIXTH SEMESTER",
              path: ["university", "bba", "pru", "sixth-semester"],
            },
            {
              id: "seventh-semester",
              label: "SEVENTH SEMESTER",
              path: ["university", "bba", "pru", "seventh-semester"],
            },
            {
              id: "eighth-semester",
              label: "EIGHTH SEMESTER",
              path: ["university", "bba", "pru", "eighth-semester"],
            },
          ],
        },
        {
          id: "fwu",
          label: "FAR-WESTERN UNIVERSITY",
          path: ["university", "bba", "fwu"],
          children: [
            {
              id: "first-semester",
              label: "FIRST SEMESTER",
              path: ["university", "bba", "fwu", "first-semester"],
            },
            {
              id: "second-semester",
              label: "SECOND SEMESTER",
              path: ["university", "bba", "fwu", "second-semester"],
            },
            {
              id: "third-semester",
              label: "THIRD SEMESTER",
              path: ["university", "bba", "fwu", "third-semester"],
            },
            {
              id: "fourth-semester",
              label: "FOURTH SEMESTER",
              path: ["university", "bba", "fwu", "fourth-semester"],
            },
            {
              id: "fifth-semester",
              label: "FIFTH SEMESTER",
              path: ["university", "bba", "fwu", "fifth-semester"],
            },
            {
              id: "sixth-semester",
              label: "SIXTH SEMESTER",
              path: ["university", "bba", "fwu", "sixth-semester"],
            },
            {
              id: "seventh-semester",
              label: "SEVENTH SEMESTER",
              path: ["university", "bba", "fwu", "seventh-semester"],
            },
            {
              id: "eighth-semester",
              label: "EIGHTH SEMESTER",
              path: ["university", "bba", "fwu", "eighth-semester"],
            },
          ],
        },
        {
          id: "mwu",
          label: "MID-WESTERN UNIVERSITY",
          path: ["university", "bba", "mwu"],
          children: [
            {
              id: "first-semester",
              label: "FIRST SEMESTER",
              path: ["university", "bba", "mwu", "first-semester"],
            },
            {
              id: "second-semester",
              label: "SECOND SEMESTER",
              path: ["university", "bba", "mwu", "second-semester"],
            },
            {
              id: "third-semester",
              label: "THIRD SEMESTER",
              path: ["university", "bba", "mwu", "third-semester"],
            },
            {
              id: "fourth-semester",
              label: "FOURTH SEMESTER",
              path: ["university", "bba", "mwu", "fourth-semester"],
            },
            {
              id: "fifth-semester",
              label: "FIFTH SEMESTER",
              path: ["university", "bba", "mwu", "fifth-semester"],
            },
            {
              id: "sixth-semester",
              label: "SIXTH SEMESTER",
              path: ["university", "bba", "mwu", "sixth-semester"],
            },
            {
              id: "seventh-semester",
              label: "SEVENTH SEMESTER",
              path: ["university", "bba", "mwu", "seventh-semester"],
            },
            {
              id: "eighth-semester",
              label: "EIGHTH SEMESTER",
              path: ["university", "bba", "mwu", "eighth-semester"],
            },
          ],
        },
      ],
    },
    {
      id: "bbm",
      label: "BBM",
      path: ["university", "bbm"],
      children: [
        {
          id: "tu",
          label: "TRIBHUVAN UNIVERSITY",
          path: ["university", "bbm", "tu"],
          children: [
            {
              id: "first-semester",
              label: "FIRST SEMESTER",
              path: ["university", "bbm", "tu", "first-semester"],
            },
            {
              id: "second-semester",
              label: "SECOND SEMESTER",
              path: ["university", "bbm", "tu", "second-semester"],
            },
            {
              id: "third-semester",
              label: "THIRD SEMESTER",
              path: ["university", "bbm", "tu", "third-semester"],
            },
            {
              id: "fourth-semester",
              label: "FOURTH SEMESTER",
              path: ["university", "bbm", "tu", "fourth-semester"],
            },
            {
              id: "fifth-semester",
              label: "FIFTH SEMESTER",
              path: ["university", "bbm", "tu", "fifth-semester"],
            },
            {
              id: "sixth-semester",
              label: "SIXTH SEMESTER",
              path: ["university", "bbm", "tu", "sixth-semester"],
            },
            {
              id: "seventh-semester",
              label: "SEVENTH SEMESTER",
              path: ["university", "bbm", "tu", "seventh-semester"],
            },
            {
              id: "eighth-semester",
              label: "EIGHTH SEMESTER",
              path: ["university", "bbm", "tu", "eighth-semester"],
            },
          ],
        },
      ],
    },
    {
      id: "bim",
      label: "BIM",
      path: ["university", "bim"],
      children: [
        {
          id: "tu",
          label: "TRIBHUVAN UNIVERSITY",
          path: ["university", "bim", "tu"],
          children: [
            {
              id: "first-semester",
              label: "FIRST SEMESTER",
              path: ["university", "bim", "tu", "first-semester"],
            },
            {
              id: "second-semester",
              label: "SECOND SEMESTER",
              path: ["university", "bim", "tu", "second-semester"],
            },
            {
              id: "third-semester",
              label: "THIRD SEMESTER",
              path: ["university", "bim", "tu", "third-semester"],
            },
            {
              id: "fourth-semester",
              label: "FOURTH SEMESTER",
              path: ["university", "bim", "tu", "fourth-semester"],
            },
            {
              id: "fifth-semester",
              label: "FIFTH SEMESTER",
              path: ["university", "bim", "tu", "fifth-semester"],
            },
            {
              id: "sixth-semester",
              label: "SIXTH SEMESTER",
              path: ["university", "bim", "tu", "sixth-semester"],
            },
            {
              id: "seventh-semester",
              label: "SEVENTH SEMESTER",
              path: ["university", "bim", "tu", "seventh-semester"],
            },
            {
              id: "eighth-semester",
              label: "EIGHTH SEMESTER",
              path: ["university", "bim", "tu", "eighth-semester"],
            },
          ],
        },
        {
          id: "ku",
          label: "KATHMANDU UNIVERSITY",
          path: ["university", "bim", "ku"],
          children: [
            // { id: 'first-semester', label: '', path: ['university', 'bim', 'tu', 'first-semester'] },
            // { id: 'second-semester', label: '', path: ['university', 'bim', 'tu', 'second-semester'] },
            {
              id: "third-semester",
              label: "THIRD SEMESTER",
              path: ["university", "bim", "tu", "third-semester"],
            },
            // { id: 'fourth-semester', label: '', path: ['university', 'bim', 'tu', 'fourth-semester'] },
            // { id: 'fifth-semester', label: '', path: ['university', 'bim', 'tu', 'fifth-semester'] },
            // { id: 'sixth-semester', label: '', path: ['university', 'bim', 'tu', 'sixth-semester'] },
            // { id: 'seventh-semester', label: '', path: ['university', 'bim', 'tu', 'seventh-semester'] },
            // { id: 'eighth-semester', label: '', path: ['university', 'bim', 'tu', 'eighth-semester'] },
          ],
        },
      ],
    },
    {
      id: "bca",
      label: "BCA",
      path: ["university", "bca"],
      children: [
        {
          id: "tu",
          label: "TRIBHUVAN UNIVERSITY",
          path: ["university", "bca", "tu"],
          children: [
            {
              id: "first-semester",
              label: "FIRST SEMESTER",
              path: ["university", "bca", "tu", "first-semester"],
            },
            {
              id: "second-semester",
              label: "SECOND SEMESTER",
              path: ["university", "bca", "tu", "second-semester"],
            },
            {
              id: "third-semester",
              label: "THIRD SEMESTER",
              path: ["university", "bca", "tu", "third-semester"],
            },
            {
              id: "fourth-semester",
              label: "FOURTH SEMESTER",
              path: ["university", "bca", "tu", "fourth-semester"],
            },
            {
              id: "fifth-semester",
              label: "FIFTH SEMESTER",
              path: ["university", "bca", "tu", "fifth-semester"],
            },
            {
              id: "sixth-semester",
              label: "SIXTH SEMESTER",
              path: ["university", "bca", "tu", "sixth-semester"],
            },
            {
              id: "seventh-semester",
              label: "SEVENTH SEMESTER",
              path: ["university", "bca", "tu", "seventh-semester"],
            },
            {
              id: "eighth-semester",
              label: "EIGHTH SEMESTER",
              path: ["university", "bca", "tu", "eighth-semester"],
            },
          ],
        },
        {
          id: "pu",
          label: "POKHARA UNIVERSITY",
          path: ["university", "bca", "pu"],
          children: [
            {
              id: "first-semester",
              label: "FIRST SEMESTER",
              path: ["university", "bca", "pu", "first-semester"],
            },
            {
              id: "second-semester",
              label: "SECOND SEMESTER",
              path: ["university", "bca", "pu", "second-semester"],
            },
            {
              id: "third-semester",
              label: "THIRD SEMESTER",
              path: ["university", "bca", "pu", "third-semester"],
            },
            {
              id: "fourth-semester",
              label: "FOURTH SEMESTER",
              path: ["university", "bca", "pu", "fourth-semester"],
            },
            {
              id: "fifth-semester",
              label: "FIFTH SEMESTER",
              path: ["university", "bca", "pu", "fifth-semester"],
            },
            {
              id: "sixth-semester",
              label: "SIXTH SEMESTER",
              path: ["university", "bca", "pu", "sixth-semester"],
            },
            {
              id: "seventh-semester",
              label: "SEVENTH SEMESTER",
              path: ["university", "bca", "pu", "seventh-semester"],
            },
            {
              id: "eighth-semester",
              label: "EIGHTH SEMESTER",
              path: ["university", "bca", "pu", "eighth-semester"],
            },
          ],
        },
      ],
    },
    {
      id: "bhm",
      label: "BHM",
      path: ["university", "bhm"],
      children: [
        {
          id: "tu",
          label: "TRIBHUVAN UNIVERSITY",
          path: ["university", "bhm", "tu"],
          children: [
            {
              id: "first-semester",
              label: "FIRST SEMESTER",
              path: ["university", "bhm", "tu", "first-semester"],
            },
            {
              id: "second-semester",
              label: "SECOND SEMESTER",
              path: ["university", "bhm", "tu", "second-semester"],
            },
            {
              id: "third-semester",
              label: "THIRD SEMESTER",
              path: ["university", "bhm", "tu", "third-semester"],
            },
            {
              id: "fourth-semester",
              label: "FOURTH SEMESTER",
              path: ["university", "bhm", "tu", "fourth-semester"],
            },
            {
              id: "fifth-semester",
              label: "FIFTH SEMESTER",
              path: ["university", "bhm", "tu", "fifth-semester"],
            },
            {
              id: "sixth-semester",
              label: "SIXTH SEMESTER",
              path: ["university", "bhm", "tu", "sixth-semester"],
            },
            {
              id: "seventh-semester",
              label: "SEVENTH SEMESTER",
              path: ["university", "bhm", "tu", "seventh-semester"],
            },
            {
              id: "eighth-semester",
              label: "EIGHTH SEMESTER",
              path: ["university", "bhm", "tu", "eighth-semester"],
            },
          ],
        },
        {
          id: "pu",
          label: "POKHARA UNIVERSITY",
          path: ["university", "bhm", "pu"],
          children: [
            {
              id: "first-semester",
              label: "FIRST SEMESTER",
              path: ["university", "bhm", "pu", "first-semester"],
            },
            {
              id: "second-semester",
              label: "SECOND SEMESTER",
              path: ["university", "bhm", "pu", "second-semester"],
            },
            {
              id: "third-semester",
              label: "THIRD SEMESTER",
              path: ["university", "bhm", "pu", "third-semester"],
            },
            {
              id: "fourth-semester",
              label: "FOURTH SEMESTER",
              path: ["university", "bhm", "pu", "fourth-semester"],
            },
            {
              id: "fifth-semester",
              label: "FIFTH SEMESTER",
              path: ["university", "bhm", "pu", "fifth-semester"],
            },
            {
              id: "sixth-semester",
              label: "SIXTH SEMESTER",
              path: ["university", "bhm", "pu", "sixth-semester"],
            },
            {
              id: "seventh-semester",
              label: "SEVENTH SEMESTER",
              path: ["university", "bhm", "pu", "seventh-semester"],
            },
            {
              id: "eighth-semester",
              label: "EIGHTH SEMESTER",
              path: ["university", "bhm", "pu", "eighth-semester"],
            },
          ],
        },
      ],
    },
    {
      id: "bsc-csit",
      label: "BSc(CSIT)",
      path: ["university", "bsc-csit"],
      children: [
        {
          id: "tu",
          label: "TRIBHUVAN UNIVERSITY",
          path: ["university", "bsc-csit", "tu"],
          children: [
            {
              id: "first-semester",
              label: "FIRST SEMESTER",
              path: ["university", "bsc-csit", "tu", "first-semester"],
            },
            {
              id: "second-semester",
              label: "SECOND SEMESTER",
              path: ["university", "bsc-csit", "tu", "second-semester"],
            },
            {
              id: "third-semester",
              label: "THIRD SEMESTER",
              path: ["university", "bsc-csit", "tu", "third-semester"],
            },
            {
              id: "fourth-semester",
              label: "FOURTH SEMESTER",
              path: ["university", "bsc-csit", "tu", "fourth-semester"],
            },
            {
              id: "fifth-semester",
              label: "FIFTH SEMESTER",
              path: ["university", "bsc-csit", "tu", "fifth-semester"],
            },
            {
              id: "sixth-semester",
              label: "SIXTH SEMESTER",
              path: ["university", "bsc-csit", "tu", "sixth-semester"],
            },
            {
              id: "seventh-semester",
              label: "SEVENTH SEMESTER",
              path: ["university", "bsc-csit", "tu", "seventh-semester"],
            },
            {
              id: "eighth-semester",
              label: "EIGHTH SEMESTER",
              path: ["university", "bsc-csit", "tu", "eighth-semester"],
            },
          ],
        },
      ],
    },
    {
      id: "mbs",
      label: "MBS",
      path: ["university", "mbs"],
      children: [
        {
          id: "tu",
          label: "TRIBHUVAN UNIVERSITY",
          path: ["university", "mbs", "tu"],
          children: [
            {
              id: "first-semester",
              label: "FIRST SEMESTER",
              path: ["university", "mbs", "tu", "first-semester"],
            },
            {
              id: "second-semester",
              label: "SECOND SEMESTER",
              path: ["university", "mbs", "tu", "second-semester"],
            },
            {
              id: "third-semester",
              label: "THIRD SEMESTER",
              path: ["university", "mbs", "tu", "third-semester"],
            },
            {
              id: "fourth-semester",
              label: "FOURTH SEMESTER",
              path: ["university", "mbs", "tu", "fourth-semester"],
            },
          ],
        },
      ],
    },
    {
      id: "mba",
      label: "MBA",
      path: ["university", "mba"],
      children: [
        {
          id: "tu",
          label: "TRIBHUVAN UNIVERSITY",
          path: ["university", "mba", "tu"],
          children: [
            {
              id: "first-semester",
              label: "FIRST SEMESTER",
              path: ["university", "mba", "tu", "first-semester"],
            },
            {
              id: "second-semester",
              label: "SECOND SEMESTER",
              path: ["university", "mba", "tu", "second-semester"],
            },
            {
              id: "third-semester",
              label: "THIRD SEMESTER",
              path: ["university", "mba", "tu", "third-semester"],
            },
            {
              id: "fourth-semester",
              label: "FOURTH SEMESTER",
              path: ["university", "mba", "tu", "fourth-semester"],
            },
          ],
        },
        {
          id: "pu",
          label: "POKHARA UNIVERSITY",
          path: ["university", "mba", "pu"],
          children: [
            {
              id: "first-semester",
              label: "FIRST SEMESTER",
              path: ["university", "mba", "pu", "first-semester"],
            },
            {
              id: "second-semester",
              label: "SECOND SEMESTER",
              path: ["university", "mba", "pu", "second-semester"],
            },
            {
              id: "third-semester",
              label: "THIRD SEMESTER",
              path: ["university", "mba", "pu", "third-semester"],
            },
            {
              id: "fourth-semester",
              label: "FOURTH SEMESTER",
              path: ["university", "mba", "pu", "fourth-semester"],
            },
          ],
        },
      ],
    },
  ],
};

const technicalVocationalCategories = {
  id: "technical",
  label: "Technical & Vocational Books",
  path: ["technical"],
  children: [
    {
      id: "tech-voc",
      label: "TECHNICAL & VOCATIONAL STREAM",
      path: ["technical", "tech-voc"],
      children: [
        {
          id: "eng",
          label: "ENGINEERING",
          path: ["technical", "tech-voc", "eng"],
          children: [
            {
              id: "grade-eleven",
              label: "GRADE ELEVEN",
              path: ["technical", "tech-voc", "eng", "grade-eleven"],
            },
            {
              id: "grade-twelve",
              label: "GRADE TWELVE",
              path: ["technical", "tech-voc", "eng", "grade-twelve"],
            },
          ],
        },
        {
          id: "agr",
          label: "AGRICULTURE",
          path: ["technical", "tech-voc", "agr"],
          children: [
            {
              id: "grade-eleven",
              label: "GRADE ELEVEN",
              path: ["technical", "tech-voc", "eng", "grade-eleven"],
            },
            {
              id: "grade-twelve",
              label: "GRADE TWELVE",
              path: ["technical", "tech-voc", "eng", "grade-twelve"],
            },
          ],
        },
      ],
    },
    {
      id: "ctevt",
      label: "CTEVT",
      path: ["technical", "ctevt"],
      children: [
        {
          id: "ctevte",
          label: "CTEVT ENGINEERING",
          path: ["technical", "ctevt", "ctevte"],
          children: [
            {
              id: "first-semester",
              label: "FIRST SEMESTER",
              path: ["technical", "ctevt", "ctevte", "first-semester"],
            },
            {
              id: "second-semester",
              label: "SECOND SEMESTER",
              path: ["technical", "ctevt", "ctevte", "second-semester"],
            },
            {
              id: "third-semester",
              label: "THIRD SEMESTER",
              path: ["technical", "ctevt", "ctevte", "third-semester"],
            },
            {
              id: "fourth-semester",
              label: "FOURTH SEMESTER",
              path: ["technical", "ctevt", "ctevte", "fourth-semester"],
            },
            {
              id: "fifth-semester",
              label: "FIFTH SEMESTER",
              path: ["technical", "ctevt", "ctevte", "fifth-semester"],
            },
            {
              id: "sixth-semester",
              label: "SIXTH SEMESTER",
              path: ["technical", "ctevt", "ctevte", "sixth-semester"],
            },
            {
              id: "seventh-semester",
              label: "SEVENTH SEMESTER",
              path: ["technical", "ctevt", "ctevte", "seventh-semester"],
            },
            {
              id: "eighth-semester",
              label: "EIGHTH SEMESTER",
              path: ["technical", "ctevt", "ctevte", "eighth-semester"],
            },
          ],
        },
        {
          id: "ctevtag",
          label: "CTEVT AGRICULTURE",
          path: ["technical", "ctevt", "ctevtag"],
          children: [
            {
              id: "first-semester",
              label: "FIRST SEMESTER",
              path: ["technical", "ctevt", "ctevtag", "first-semester"],
            },
            {
              id: "second-semester",
              label: "SECOND SEMESTER",
              path: ["technical", "ctevt", "ctevtag", "second-semester"],
            },
            {
              id: "third-semester",
              label: "THIRD SEMESTER",
              path: ["technical", "ctevt", "ctevtag", "third-semester"],
            },
            {
              id: "fourth-semester",
              label: "FOURTH SEMESTER",
              path: ["technical", "ctevt", "ctevtag", "fourth-semester"],
            },
            {
              id: "fifth-semester",
              label: "FIFTH SEMESTER",
              path: ["technical", "ctevt", "ctevtag", "fifth-semester"],
            },
            {
              id: "sixth-semester",
              label: "SIXTH SEMESTER",
              path: ["technical", "ctevt", "ctevtag", "sixth-semester"],
            },
            {
              id: "seventh-semester",
              label: "SEVENTH SEMESTER",
              path: ["technical", "ctevt", "ctevtag", "seventh-semester"],
            },
            {
              id: "eighth-semester",
              label: "EIGHTH SEMESTER",
              path: ["technical", "ctevt", "ctevtag", "eighth-semester"],
            },
          ],
        },
        {
          id: "ctevth",
          label: "CTEVT HEALTH",
          path: ["technical", "ctevt", "ctevth"],
          children: [
            {
              id: "first-semester",
              label: "FIRST SEMESTER",
              path: ["technical", "ctevt", "ctevth", "first-semester"],
            },
            {
              id: "second-semester",
              label: "SECOND SEMESTER",
              path: ["technical", "ctevt", "ctevth", "second-semester"],
            },
            {
              id: "third-semester",
              label: "THIRD SEMESTER",
              path: ["technical", "ctevt", "ctevth", "third-semester"],
            },
            {
              id: "fourth-semester",
              label: "FOURTH SEMESTER",
              path: ["technical", "ctevt", "ctevth", "fourth-semester"],
            },
            {
              id: "fifth-semester",
              label: "FIFTH SEMESTER",
              path: ["technical", "ctevt", "ctevth", "fifth-semester"],
            },
            {
              id: "sixth-semester",
              label: "SIXTH SEMESTER",
              path: ["technical", "ctevt", "ctevth", "sixth-semester"],
            },
            {
              id: "seventh-semester",
              label: "SEVENTH SEMESTER",
              path: ["technical", "ctevt", "ctevth", "seventh-semester"],
            },
            {
              id: "eighth-semester",
              label: "EIGHTH SEMESTER",
              path: ["technical", "ctevt", "ctevth", "eighth-semester"],
            },
          ],
        },
      ],
    },
  ],
};

const moreBooksCategories = {
  id: "more-books",
  label: "More Books",
  path: ["more-books"],
  children: [
    {
      id: "ba",
      label: "B.A.",
      path: ["more-books", "ba"],
      children: [
        {
          id: "first-year",
          label: "FIRST YEAR",
          path: ["more-books", "ba", "first-year"],
        },
        {
          id: "second-year",
          label: "SECOND YEAR",
          path: ["more-books", "ba", "second-year"],
        },
        {
          id: "third-year",
          label: "THIRD YEAR",
          path: ["more-books", "ba", "third-year"],
        },
        {
          id: "fourth-year",
          label: "FOURTH YEAR",
          path: ["more-books", "ba", "fourth-year"],
        },
      ],
    },
    {
      id: "bsc",
      label: "B.Sc.",
      path: ["more-books", "bsc"],
      children: [
        {
          id: "first-year",
          label: "FIRST YEAR",
          path: ["more-books", "bsc", "first-year"],
        },
        {
          id: "second-year",
          label: "SECOND YEAR",
          path: ["more-books", "bsc", "second-year"],
        },
        {
          id: "third-year",
          label: "THIRD YEAR",
          path: ["more-books", "bsc", "third-year"],
        },
        {
          id: "fourth-year",
          label: "FOURTH YEAR",
          path: ["more-books", "bsc", "fourth-year"],
        },
      ],
    },
    {
      id: "bhcm",
      label: "BHCM",
      path: ["more-books", "bhcm"],
      children: [
        {
          id: "first-semester",
          label: "FIRST SEMESTER",
          path: ["more-books", "bhcm", "first-semester"],
        },
        {
          id: "second-semester",
          label: "SECOND SEMESTER",
          path: ["more-books", "bhcm", "second-semester"],
        },
        {
          id: "third-semester",
          label: "THIRD SEMESTER",
          path: ["more-books", "bhcm", "third-semester"],
        },
        {
          id: "fourth-semester",
          label: "FOURTH SEMESTER",
          path: ["more-books", "bhcm", "fourth-semester"],
        },
        {
          id: "fifth-semester",
          label: "FIFTH SEMESTER",
          path: ["more-books", "bhcm", "fifth-semester"],
        },
        {
          id: "sixth-semester",
          label: "SIXTH SEMESTER",
          path: ["more-books", "bhcm", "sixth-semester"],
        },
        {
          id: "seventh-semester",
          label: "SEVENTH SEMESTER",
          path: ["more-books", "bhcm", "seventh-semester"],
        },
        {
          id: "eighth-semester",
          label: "EIGHTH SEMESTER",
          path: ["more-books", "bhcm", "eighth-semester"],
        },
      ],
    },
    {
      id: "bcis",
      label: "BCIS",
      path: ["more-books", "bcis"],
      children: [
        {
          id: "first-semester",
          label: "FIRST SEMESTER",
          path: ["more-books", "bcis", "first-semester"],
        },
        {
          id: "second-semester",
          label: "SECOND SEMESTER",
          path: ["more-books", "bcis", "second-semester"],
        },
        {
          id: "third-semester",
          label: "THIRD SEMESTER",
          path: ["more-books", "bcis", "third-semester"],
        },
        {
          id: "fourth-semester",
          label: "FOURTH SEMESTER",
          path: ["more-books", "bcis", "fourth-semester"],
        },
        {
          id: "fifth-semester",
          label: "FIFTH SEMESTER",
          path: ["more-books", "bcis", "fifth-semester"],
        },
        {
          id: "sixth-semester",
          label: "SIXTH SEMESTER",
          path: ["more-books", "bcis", "sixth-semester"],
        },
        {
          id: "seventh-semester",
          label: "SEVENTH SEMESTER",
          path: ["more-books", "bcis", "seventh-semester"],
        },
        {
          id: "eighth-semester",
          label: "EIGHTH SEMESTER",
          path: ["more-books", "bcis", "eighth-semester"],
        },
      ],
    },
    {
      id: "bttm",
      label: "BTTM",
      path: ["more-books", "bttm"],
      children: [
        {
          id: "first-semester",
          label: "FIRST SEMESTER",
          path: ["more-books", "bttm", "first-semester"],
        },
        {
          id: "second-semester",
          label: "SECOND SEMESTER",
          path: ["more-books", "bttm", "second-semester"],
        },
        {
          id: "third-semester",
          label: "THIRD SEMESTER",
          path: ["more-books", "bttm", "third-semester"],
        },
        {
          id: "fourth-semester",
          label: "FOURTH SEMESTER",
          path: ["more-books", "bttm", "fourth-semester"],
        },
        {
          id: "fifth-semester",
          label: "FIFTH SEMESTER",
          path: ["more-books", "bttm", "fifth-semester"],
        },
        {
          id: "sixth-semester",
          label: "SIXTH SEMESTER",
          path: ["more-books", "bttm", "sixth-semester"],
        },
        {
          id: "seventh-semester",
          label: "SEVENTH SEMESTER",
          path: ["more-books", "bttm", "seventh-semester"],
        },
        {
          id: "eighth-semester",
          label: "EIGHTH SEMESTER",
          path: ["more-books", "bttm", "eighth-semester"],
        },
      ],
    },
    {
      id: "bha-tt",
      label: "BHA-TT",
      path: ["more-books", "bha-tt"],
      children: [
        {
          id: "first-semester",
          label: "FIRST SEMESTER",
          path: ["more-books", "bha-tt", "first-semester"],
        },
        {
          id: "second-semester",
          label: "SECOND SEMESTER",
          path: ["more-books", "bha-tt", "second-semester"],
        },
        {
          id: "third-semester",
          label: "THIRD SEMESTER",
          path: ["more-books", "bha-tt", "third-semester"],
        },
        {
          id: "fourth-semester",
          label: "FOURTH SEMESTER",
          path: ["more-books", "bha-tt", "fourth-semester"],
        },
        {
          id: "fifth-semester",
          label: "FIFTH SEMESTER",
          path: ["more-books", "bha-tt", "fifth-semester"],
        },
        {
          id: "sixth-semester",
          label: "SIXTH SEMESTER",
          path: ["more-books", "bha-tt", "sixth-semester"],
        },
        {
          id: "seventh-semester",
          label: "SEVENTH SEMESTER",
          path: ["more-books", "bha-tt", "seventh-semester"],
        },
        {
          id: "eighth-semester",
          label: "EIGHTH SEMESTER",
          path: ["more-books", "bha-tt", "eighth-semester"],
        },
      ],
    },
    {
      id: "bba-bi",
      label: "BBA-BI",
      path: ["more-books", "bba-bi"],
      children: [
        {
          id: "first-semester",
          label: "FIRST SEMESTER",
          path: ["more-books", "bba-bi", "first-semester"],
        },
        {
          id: "second-semester",
          label: "SECOND SEMESTER",
          path: ["more-books", "bba-bi", "second-semester"],
        },
        {
          id: "third-semester",
          label: "THIRD SEMESTER",
          path: ["more-books", "bba-bi", "third-semester"],
        },
        {
          id: "fourth-semester",
          label: "FOURTH SEMESTER",
          path: ["more-books", "bba-bi", "fourth-semester"],
        },
        {
          id: "fifth-semester",
          label: "FIFTH SEMESTER",
          path: ["more-books", "bba-bi", "fifth-semester"],
        },
        {
          id: "sixth-semester",
          label: "SIXTH SEMESTER",
          path: ["more-books", "bba-bi", "sixth-semester"],
        },
        {
          id: "seventh-semester",
          label: "SEVENTH SEMESTER",
          path: ["more-books", "bba-bi", "seventh-semester"],
        },
        {
          id: "eighth-semester",
          label: "EIGHTH SEMESTER",
          path: ["more-books", "bba-bi", "eighth-semester"],
        },
      ],
    },
    {
      id: "bha-f",
      label: "BHA-F",
      path: ["more-books", "bha-f"],
      children: [
        {
          id: "first-semester",
          label: "FIRST SEMESTER",
          path: ["more-books", "bha-f", "first-semester"],
        },
        {
          id: "second-semester",
          label: "SECOND SEMESTER",
          path: ["more-books", "bha-f", "second-semester"],
        },
        {
          id: "third-semester",
          label: "THIRD SEMESTER",
          path: ["more-books", "bha-f", "third-semester"],
        },
        {
          id: "fourth-semester",
          label: "FOURTH SEMESTER",
          path: ["more-books", "bha-f", "fourth-semester"],
        },
        {
          id: "fifth-semester",
          label: "FIFTH SEMESTER",
          path: ["more-books", "bha-f", "fifth-semester"],
        },
        {
          id: "sixth-semester",
          label: "SIXTH SEMESTER",
          path: ["more-books", "bha-f", "sixth-semester"],
        },
        {
          id: "seventh-semester",
          label: "SEVENTH SEMESTER",
          path: ["more-books", "bha-f", "seventh-semester"],
        },
        {
          id: "eighth-semester",
          label: "EIGHTH SEMESTER",
          path: ["more-books", "bha-f", "eighth-semester"],
        },
      ],
    },
    {
      id: "mbm",
      label: "MBM",
      path: ["more-books", "mbm"],
      children: [
        {
          id: "first-semester",
          label: "FIRST SEMESTER",
          path: ["more-books", "mbm", "first-semester"],
        },
        {
          id: "second-semester",
          label: "SECOND SEMESTER",
          path: ["more-books", "mbm", "second-semester"],
        },
        {
          id: "third-semester",
          label: "THIRD SEMESTER",
          path: ["more-books", "mbm", "third-semester"],
        },
        {
          id: "fourth-semester",
          label: "FOURTH SEMESTER",
          path: ["more-books", "mbm", "fourth-semester"],
        },
        {
          id: "fifth-semester",
          label: "FIFTH SEMESTER",
          path: ["more-books", "mbm", "fifth-semester"],
        },
        {
          id: "sixth-semester",
          label: "SIXTH SEMESTER",
          path: ["more-books", "mbm", "sixth-semester"],
        },
        {
          id: "seventh-semester",
          label: "SEVENTH SEMESTER",
          path: ["more-books", "mbm", "seventh-semester"],
        },
        {
          id: "eighth-semester",
          label: "EIGHTH SEMESTER",
          path: ["more-books", "mbm", "eighth-semester"],
        },
      ],
    },
    {
      id: "mpa",
      label: "MPA",
      path: ["more-books", "mpa"],
      children: [
        {
          id: "first-semester",
          label: "FIRST SEMESTER",
          path: ["more-books", "mpa", "first-semester"],
        },
        {
          id: "second-semester",
          label: "SECOND SEMESTER",
          path: ["more-books", "mpa", "second-semester"],
        },
        {
          id: "third-semester",
          label: "THIRD SEMESTER",
          path: ["more-books", "mpa", "third-semester"],
        },
        {
          id: "fourth-semester",
          label: "FOURTH SEMESTER",
          path: ["more-books", "mpa", "fourth-semester"],
        },
        {
          id: "fifth-semester",
          label: "FIFTH SEMESTER",
          path: ["more-books", "mpa", "fifth-semester"],
        },
        {
          id: "sixth-semester",
          label: "SIXTH SEMESTER",
          path: ["more-books", "mpa", "sixth-semester"],
        },
        {
          id: "seventh-semester",
          label: "SEVENTH SEMESTER",
          path: ["more-books", "mpa", "seventh-semester"],
        },
        {
          id: "eighth-semester",
          label: "EIGHTH SEMESTER",
          path: ["more-books", "mpa", "eighth-semester"],
        },
      ],
    },
  ],
};

const ankurBooksCategory = {
  id: "ankur-books",
  label: "Books",
  path: ["ankur-books"],
  children: [
    {
      id: "nepali",
      label: "NEPALI",
      path: ["ankur-books", "nepali"],
      children: [
        {
          id: "social",
          label: "ANTHROPOLOGY / SOCIAL",
          path: ["ankur-books", "nepali"],
        },
        {
          id: "art",
          label: "ART",
          path: ["ankur-books", "nepali"],
        },
        {
          id: "biography",
          label: "BIOGRAPHY",
          path: ["ankur-books", "nepali"],
        },
        {
          id: "bussiness",
          label: "BUSSINESS",
          path: ["ankur-books", "nepali"],
        },
        {
          id: "children",
          label: "CHILDRENS",
          path: ["ankur-books", "nepali"],
        },
        {
          id: "classic",
          label: "CLASSICS",
          path: ["ankur-books", "nepali"],
        },
        {
          id: "crticism",
          label: "CRITICISM",
          path: ["ankur-books", "nepali"],
        },
        {
          id: "dictionary",
          label: "DICTIONARIES",
          path: ["ankur-books", "nepali"],
        },
        {
          id: "drama",
          label: "DRAMAS",
          path: ["ankur-books", "nepali"],
        },
        {
          id: "economics",
          label: "ECONOMICS",
          path: ["ankur-books", "nepali"],
        },
        {
          id: "education",
          label: "EDUCATION",
          path: ["ankur-books", "nepali"],
        },
        {
          id: "essay",
          label: "ESSAYS",
          path: ["ankur-books", "nepali"],
        },
        {
          id: "fiction",
          label: "FICTION",
          path: ["ankur-books", "nepali"],
        },
        {
          id: "fitness",
          label: "FITNESS",
          path: ["ankur-books", "nepali"],
        },
        {
          id: "folklore",
          label: "FOLKLORE",
          path: ["ankur-books", "nepali"],
        },
        {
          id: "grammar",
          label: "GRAMMAR",
          path: ["ankur-books", "nepali"],
        },
        {
          id: "history",
          label: "HISTORY",
          path: ["ankur-books", "nepali"],
        },
        {
          id: "humor",
          label: "HUMOR",
          path: ["ankur-books", "nepali"],
        },
        {
          id: "language",
          label: "LANGUAGE",
          path: ["ankur-books", "nepali"],
        },
        {
          id: "language-learning",
          label: "LANGUAGE LEARNING",
          path: ["ankur-books", "nepali"],
        },
        {
          id: "law",
          label: "LAW",
          path: ["ankur-books", "nepali"],
        },
        {
          id: "literature",
          label: "LITERATURE",
          path: ["ankur-books", "nepali"],
        },
        {
          id: "medical",
          label: "MEDICAL",
          path: ["ankur-books", "nepali"],
        },
        {
          id: "memories",
          label: "MEMORIES",
          path: ["ankur-books", "nepali"],
        },
        {
          id: "music",
          label: "MUSIC",
          path: ["ankur-books", "nepali"],
        },
        {
          id: "non-fiction",
          label: "NON-FICTION",
          path: ["ankur-books", "nepali"],
        },
        {
          id: "parents",
          label: "PARENTS",
          path: ["ankur-books", "nepali"],
        },
        {
          id: "philosophy",
          label: "PHILOSOPHY",
          path: ["ankur-books", "nepali"],
        },
        {
          id: "poetry",
          label: "POETRY",
          path: ["ankur-books", "nepali"],
        },
        {
          id: "political",
          label: "POLITICAL",
          path: ["ankur-books", "nepali"],
        },
        {
          id: "religion",
          label: "RELIGION",
          path: ["ankur-books", "nepali"],
        },
        {
          id: "romance",
          label: "ROMANCE",
          path: ["ankur-books", "nepali"],
        },
        {
          id: "science",
          label: "SCIENCE",
          path: ["ankur-books", "nepali"],
        },
        {
          id: "self-help",
          label: "SELF-HELP",
          path: ["ankur-books", "nepali"],
        },
        {
          id: "sport",
          label: "SPORT",
          path: ["ankur-books", "nepali"],
        },
        {
          id: "stories",
          label: "STORIES",
          path: ["ankur-books", "nepali"],
        },
        {
          id: "travel",
          label: "TRAVEL",
          path: ["ankur-books", "nepali"],
        },
      ],
    },
    {
      id: "english",
      label: "ENGLISH",
      path: ["ankur-books", "english"],
      children: [
        {
          id: "anthropology-social",
          label: "ANTHROPOLOGY / SOCIAL",
          path: ["ankur-books", "english"],
        },
        {
          id: "art",
          label: "ART",
          path: ["ankur-books", "english"],
        },
        {
          id: "biography",
          label: "BIOGRAPHY",
          path: ["ankur-books", "english"],
        },
        {
          id: "bussiness",
          label: "BUSINESS",
          path: ["ankur-books", "english"],
        },
        {
          id: "children",
          label: "CHILDRENS",
          path: ["ankur-books", "english"],
        },
        {
          id: "classic",
          label: "CLASSIC",
          path: ["ankur-books", "english"],
        },
        {
          id: "cooking",
          label: "COOKING",
          path: ["ankur-books", "english"],
        },
        {
          id: "dictionary",
          label: "DICTIONARIES",
          path: ["ankur-books", "english"],
        },
        {
          id: "economics",
          label: "ECONOMICS",
          path: ["ankur-books", "english"],
        },
        {
          id: "education",
          label: "EDUCATION",
          path: ["ankur-books", "english"],
        },
        {
          id: "fantasy",
          label: "FANTASY",
          path: ["ankur-books", "english"],
        },
        {
          id: "fiction",
          label: "FICTION",
          path: ["ankur-books", "english"],
        },
        {
          id: "fitness",
          label: "FITNESS",
          path: ["ankur-books", "english"],
        },
        {
          id: "folklore",
          label: "FOLKLORE",
          path: ["ankur-books", "english"],
        },
        {
          id: "grammar",
          label: "GRAMMAR",
          path: ["ankur-books", "english"],
        },
        {
          id: "history",
          label: "HISTORY",
          path: ["ankur-books", "english"],
        },
        {
          id: "language-learning",
          label: "LANGUAGE LEARNING",
          path: ["ankur-books", "english"],
        },
        {
          id: "law",
          label: "LAW",
          path: ["ankur-books", "english"],
        },
        {
          id: "non-fiction",
          label: "NON-FICTION",
          path: ["ankur-books", "english"],
        },
        {
          id: "philosophy",
          label: "PHILOSOHY",
          path: ["ankur-books", "english"],
        },
        {
          id: "political",
          label: "POLITICAL",
          path: ["ankur-books", "english"],
        },
        {
          id: "religion",
          label: "RELIGION",
          path: ["ankur-books", "english"],
        },
        {
          id: "romance",
          label: "ROMANCE",
          path: ["ankur-books", "english"],
        },
        {
          id: "science",
          label: "SCIENCE",
          path: ["ankur-books", "english"],
        },
        {
          id: "science-fiction",
          label: "SCIENCE FICTION",
          path: ["ankur-books", "english"],
        },
        {
          id: "self-help",
          label: "SELF-HELP",
          path: ["ankur-books", "english"],
        },
        {
          id: "thrillers",
          label: "THRILLERS",
          path: ["ankur-books", "english"],
        },
        {
          id: "travel",
          label: "TRAVEL",
          path: ["ankur-books", "english"],
        },
        {
          id: "young-adult",
          label: "YOUNG ADULT",
          path: ["ankur-books", "english"],
        },
      ],
    },
    {
      id: "best-sellers",
      label: "BEST SELLERS",
      path: ["ankur-books", "best-sellers"],
    },
    {
      id: "new-arrivals",
      label: "NEW ARRIVALS",
      path: ["ankur-books", "new-arrivals"],
    },
    {
      id: "must-read",
      label: "MUST READ",
      path: ["ankur-books", "must-read"],
    },
    {
      id: "view-all",
      label: "VIEW ALL",
      path: ["ankur-books", "view-all"],
    },
    {
      id: "clearance-sale",
      label: "CLEARANCE",
      path: ["ankur-books", "clearance-sale"],
    },
    {
      id: "authors-pick",
      label: "AUTHORS PICK",
      path: ["ankur-books", "authors-pick"],
    }
  ],
};


const rareBooksCategory = {
  id: "rare-books",
  label: "Rare Books",
  path: ["rare-books"],
};
const ebooks = {
  id: "e-books",
  label: "E-Books",
  path: ["rare-books", "e-books"],
};
const toysAndGames = {
  id: "toys-and-games",
  label: "Toys and Games",
  path: ["rare-books", "toys-and-games"],
};


export const publishers = [
  {
    id: 1,
    name: "Buddha Publication",
    slug: "buddha-publication",
    logo: "https://via.placeholder.com/150?text=Buddha",
    description: "Leading publisher for school and college textbooks in Nepal.",
    categories: [],
  },
  {
    id: 2,
    name: "Asmita Publication",
    slug: "asmita-publication",
    logo: "https://via.placeholder.com/150?text=Asmita",
    description:
      "Quality educational materials for competitive exams and academic courses.",
    categories: [
      schoolCategories,
      plusTwoCategories,
      universityCategories,
      technicalVocationalCategories,
      moreBooksCategories,
    ],
  },
  {
    id: 3,
    name: "Ankur Publication",
    slug: "ankur-publication",
    logo: "https://via.placeholder.com/150?text=Ankur",
    description: "Renowned for reference books and literary collections.",
    categories: [
      ankurBooksCategory, rareBooksCategory, ebooks, toysAndGames
    ],
  },
  {
    id: 4,
    name: "Ekta Books",
    slug: "ekta-books",
    logo: "https://via.placeholder.com/150?text=Ekta",
    description:
      "Distributor of a wide range of Nepali and international books.",
    categories: [],
  },
];

export const books = [
  {
    id: 101,
    title: "Class 10 Science",
    author: "Dr. K.C. Sharma",
    publisherId: 2, // Buddha
    categoryPath: ["school", "class-10"],
    price: 450,
    cover: "https://via.placeholder.com/300x400?text=Science+10",
    description:
      "Comprehensive science textbook for Grade 10 students following the national curriculum.",
  },
  {
    id: 102,
    title: "BBS 1st Year English",
    author: "R.K. Jha",
    publisherId: 2,
    categoryPath: ["university", "bbs", "tu", "first-year"],
    price: 850,
    cover: "https://via.placeholder.com/300x400?text=BBS+English",
    description: "English for Business Studies for BBS 1st Year.",
  },
  {
    id: 201,
    title: "BBA 3rd Year Finance",
    author: "Asmita Team",
    publisherId: 2, // Asmita
    categoryPath: ["university", "bba", "tu", "third-year"],
    price: 1200,
    cover: "https://via.placeholder.com/300x400?text=BBA+Finance",
    description: "Financial Management guide for BBA 3rd Semester.",
  },
  {
    id: 202,
    title: "Class 5 Mathematics",
    author: "S. Gupta",
    publisherId: 2,
    categoryPath: ["school", "class-5"],
    price: 350,
    cover: "https://via.placeholder.com/300x400?text=Math+5",
    description:
      "Workbook for practice and revision of school level mathematics.",
  },
  {
    id: 301,
    title: "Class 12 History",
    author: "D.R. Regmi",
    publisherId: 2,
    categoryPath: ["plus-two", "class-12"],
    price: 1500,
    cover: "https://via.placeholder.com/300x400?text=History+12",
    description: "Detailed historical account of Nepal.",
  },
];


export const globalCategoryTree = [
  schoolCategories,
  plusTwoCategories,
  universityCategories,
];

export const flashSaleBooks = [
  {
    id: 901,
    title: "The Alchemist",
    author: "Paulo Coelho",
    price: 800,
    originalPrice: 800,
    discountPrice: 400,
    discountPercent: 50,
    cover: "https://via.placeholder.com/300x450?text=The+Alchemist",
    categoryPath: ['fiction', 'classic']
  },
  {
    id: 902,
    title: "Atomic Habits",
    author: "James Clear",
    price: 1200,
    originalPrice: 1200,
    discountPrice: 960,
    discountPercent: 20,
    cover: "https://via.placeholder.com/300x450?text=Atomic+Habits",
    categoryPath: ['self-help'],
    keywords: ["productivity", "habits", "psychology"],
    subject: "Self Improvement"
  },
  {
    id: 903,
    title: "Rich Dad Poor Dad",
    author: "Robert Kiyosaki",
    price: 1000,
    originalPrice: 1000,
    discountPrice: 750,
    discountPercent: 25,
    cover: "https://via.placeholder.com/300x450?text=Rich+Dad",
    categoryPath: ['finance'],
    keywords: ["finance", "money", "investing"],
    subject: "Personal Finance"
  },
  {
    id: 904,
    title: "Psychology of Money",
    author: "Morgan Housel",
    price: 900,
    originalPrice: 900,
    discountPrice: 630,
    discountPercent: 30,
    cover: "https://via.placeholder.com/300x450?text=Psychology+Money",
    categoryPath: ['finance']
  }
];

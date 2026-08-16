export const homeServices = [
  {
    title: 'Family Law',
    description:
      'Khula and divorce, maintenance, dower and dowry, custody and visitation.',
    path: '/services/family-law',
  },
  {
    title: 'Civil Law & Litigation',
    description: 'Civil suits, litigation and representation in civil disputes.',
    path: '/services/civil-law',
  },
  {
    title: 'Corporate & Commercial',
    description:
      'SECP and FBR registration, contracts, agreements and corporate documents.',
    path: '/services/corporate-commercial',
  },
  {
    title: 'Immigration & Study Abroad',
    description:
      'University admissions, scholarships and student visa-file preparation.',
    path: '/services/immigration',
  },
  {
    title: 'Attestation & Documentation',
    description:
      'MOFA attestation, apostille, notarization, Magistrate attestation and legal deeds.',
    path: '/services/attestation',
  },
]

export const servicePages = {
  familyLaw: {
    slug: 'family-law',
    title: 'Family Law',
    intro:
      'Family matters are personal, and legal proceedings can become stressful when relationships, children and financial rights are involved. We assist clients with family-law proceedings and the preparation of the documents required for their case.',
    cta: { label: 'Discuss Your Family Matter', path: '/contact' },
    sections: [
      {
        title: 'Dissolution of Marriage',
        description:
          'We handle proceedings for dissolution of marriage, including Khula and matters arising from divorce. Our assistance covers preparation of the necessary documents, filing of proceedings and representation before the relevant court. Where the circumstances require additional family claims, these can be addressed as part of the legal strategy for the matter.',
      },
      {
        title: 'Maintenance',
        description:
          'A spouse or child may have a legal right to financial support. We assist with claims for recovery of maintenance, including preparation of the claim and supporting documents and representation in the proceedings.',
      },
      {
        title: 'Dower & Dowry Articles',
        description:
          'We assist with claims concerning dower (Haq Mehr) and the recovery of dowry articles. The case is prepared on the basis of the facts, available evidence and applicable law.',
      },
      {
        title: 'Custody of Minors',
        description:
          "When parents disagree about the care and custody of their children, we assist with custody and guardianship proceedings. The child's welfare and the circumstances of the case remain central to the legal process.",
      },
      {
        title: 'Visitation of Minors',
        description:
          'We also assist parents and other eligible family members with visitation arrangements and proceedings concerning access to minors, including matters where a suitable visitation schedule needs to be established through the court.',
      },
    ],
  },
  civilLaw: {
    slug: 'civil-law',
    title: 'Civil Law & Litigation',
    intro:
      'Civil disputes often involve property, money, agreements, rights or obligations. We assist clients from the early assessment of a dispute through the preparation and conduct of civil proceedings.',
    cta: { label: 'Discuss Your Civil Matter', path: '/contact' },
    sections: [
      {
        title: 'Civil Suits',
        description:
          'We prepare and pursue civil suits based on the facts and legal rights involved in the matter. This includes preparation of pleadings, applications, supporting documents and other papers required for the proceedings.',
      },
      {
        title: 'Civil Litigation',
        description:
          "Where a dispute proceeds to court, we provide representation and assistance throughout the litigation process. This includes preparing the case, responding to the other side's position, attending proceedings and handling related legal documentation.",
      },
      {
        title: 'Legal Notices & Pre-Litigation Work',
        description:
          'A well-prepared legal notice can sometimes resolve a dispute before litigation becomes necessary. We prepare legal notices and advise clients on the available legal course based on the circumstances of the matter.',
      },
      {
        title: 'Case Preparation',
        description:
          "Before filing a case, we review the available documents and the client's account of events to identify the main legal issues. This helps determine the appropriate form of proceedings and the documents that should accompany the case.",
      },
    ],
  },
  corporateCommercial: {
    slug: 'corporate-commercial',
    title: 'Corporate & Commercial Legal Services',
    intro:
      'A business needs more than registration. It also needs documents that clearly set out rights, responsibilities and commercial arrangements. We assist businesses and entrepreneurs with registration and legal documentation from the beginning and as the business develops.',
    cta: { label: 'Speak to Us About Your Business', path: '/contact' },
    sections: [
      {
        title: 'Company & Business Registration',
        description:
          'We assist with registration of Single Member (SMC) Private Limited Companies and Private Limited Companies through SECP. For individuals operating as sole proprietors, we also assist with relevant registration and documentation with FBR.',
      },
      {
        title: 'Contracts & Agreements',
        description:
          'We prepare and draft contracts and agreements for business and commercial use. Depending on the transaction, this may include service agreements, business arrangements, undertakings, terms and conditions and other contractual documents.',
      },
      {
        title: 'Corporate Documents',
        description:
          'We prepare and review corporate and business-related documents required for particular transactions, registrations and ongoing business needs. Documents are prepared according to the nature of the business and the purpose for which they are required.',
      },
      {
        title: 'Business Legal Assistance',
        description:
          'If you are starting a business or changing an existing business arrangement, we can help identify the documents and legal steps involved so that the business structure and paperwork are properly organized.',
      },
    ],
  },
  immigration: {
    slug: 'immigration',
    title: 'Immigration & Study Abroad',
    intro:
      'Studying abroad involves more than submitting an admission form. Students often have to manage university applications, scholarships, financial and academic documents and a separate visa file. We assist with the preparation and organization of these steps.',
    cta: { label: 'Discuss Your Study Abroad Plans', path: '/contact' },
    notice:
      'Important: Admission, scholarship and visa decisions are made by the relevant university, scholarship provider or immigration authority. Eligibility and outcomes depend on their requirements and decisions.',
    sections: [
      {
        title: 'University Admissions',
        description:
          'We assist students with applications to foreign universities based on their academic background, intended field of study and the published requirements of the institution. This includes reviewing application documents and helping prepare the submission.',
      },
      {
        title: 'Scholarship Applications',
        description:
          'Where a student meets the stated requirements, we assist with scholarship applications and the preparation of the documents requested by the university or scholarship provider.',
      },
      {
        title: 'Student Visa File',
        description:
          'Once admission is secured, we assist with organizing the student visa file. We review the required documents, help prepare supporting paperwork and arrange the file in a clear and orderly manner for submission.',
      },
      {
        title: 'Document Preparation',
        description:
          'Where documents need to be translated, notarized, attested or otherwise prepared for an application, we can assist with the documentation requirements and help identify what is needed for the relevant application.',
      },
    ],
  },
  attestation: {
    slug: 'attestation',
    title: 'Attestation & Documentation',
    intro:
      'Documents prepared for use abroad or for official purposes often have to pass through a specific chain of attestation or authentication. We assist clients with the preparation and processing of documents according to the purpose for which they are required.',
    cta: { label: 'Request Documentation Assistance', path: '/contact' },
    sections: [
      {
        title: 'MOFA Attestation',
        description:
          'We provide assistance with attestation of educational and other documents through the Ministry of Foreign Affairs (MOFA), Pakistan, including the apostille service where applicable. Urgent processing assistance is available where the relevant service permits.',
      },
      {
        title: 'International Notarization',
        description:
          'We assist with international notarization requirements for documents intended for use outside Pakistan, including arranging the appropriate notarial documentation according to the purpose and jurisdiction involved.',
      },
      {
        title: 'Magistrate Attestation',
        description:
          'Where a document requires attestation before a Magistrate or another competent authority, we assist with preparation and processing of the document.',
      },
      {
        title: 'Deeds & Legal Documents',
        description:
          'We prepare legal deeds and documents such as divorce deeds, sale and purchase deeds, affidavits, declarations and powers of attorney, as well as other documents required for personal, family or business purposes.',
      },
      {
        title: 'Documentation for Use Abroad',
        description:
          'If a document is intended for use in another country, the required attestation, apostille, notarization or legalization can depend on the destination and purpose. We assist in preparing the documentation accordingly.',
      },
    ],
  },
  overseasPakistanis: {
    slug: 'overseas-pakistanis',
    title: 'Special Services for Overseas Pakistanis',
    intro:
      'For people living abroad, dealing with a legal matter in Pakistan can be difficult when travel is not practical. We assist overseas Pakistanis with selected legal proceedings and documentation in Pakistan.',
    cta: { label: 'Contact Us From Abroad', path: '/contact' },
    processSteps: [
      'Contact us',
      'Explain the matter',
      'Provide the relevant documents',
      'Receive guidance on the required authority/documents',
      'The authorized representative handles the permitted steps in Pakistan',
    ],
    sections: [
      {
        title: 'Divorce in Pakistan While Living Abroad',
        description:
          'A Muslim adult male residing outside Pakistan may, where legally appropriate, authorize a representative in Pakistan through a properly executed Special Power of Attorney (SPOA). The appointed representative can then undertake the authorized steps in the relevant proceedings on his behalf.',
      },
      {
        title: 'Family Matters for Shia Muslims',
        description:
          'Certain Shia Muslim family matters can involve procedures or documentation that differ from other family-law proceedings. We provide assistance based on the applicable legal and procedural requirements of the particular matter.',
      },
      {
        title: 'Documentation from Abroad',
        description:
          'We also assist overseas clients with powers of attorney, affidavits, deeds and other documents that need to be prepared or used in Pakistan, including guidance on the relevant attestation and authentication requirements.',
      },
      {
        title: 'Adoption-Related Assistance',
        description:
          'We provide assistance with adoption-related procedures and documentation in Pakistan, subject to the applicable legal requirements and the circumstances of the child and prospective adoptive parent or parents.',
      },
    ],
  },
}

export const aboutContent = {
  intro:
    'We provide legal services to individuals, families and businesses in Pakistan and assist clients living abroad who need to deal with legal matters or documentation in Pakistan.',
  sections: [
    {
      title: 'Our Work',
      description:
        'Our practice covers family law, civil litigation, corporate and commercial legal services, immigration and study abroad assistance, and attestation and documentation. We approach each matter according to its facts rather than treating every client in the same way.',
    },
    {
      title: 'Our Approach',
      description:
        'We keep communication direct and practical. Clients should know what documents are required, what the next step is and what part of the process is being handled on their behalf.',
    },
  ],
  cta: { label: 'Contact Our Office', path: '/contact' },
}

export const contactContent = {
  intro:
    'For legal assistance, documentation services or an initial discussion about your matter, contact our office by phone or WhatsApp.',
}

export const homeContent = {
  hero: {
    lines: [
      'Trusted Legal Guidance.',
      'Strong Representation.',
      'Practical Solutions.',
    ],
    subtitle:
      'Legal assistance for individuals, families, businesses and clients living abroad.',
    cta: { label: 'Contact Us', path: '/contact' },
  },
  about: {
    heading: 'A law firm that understands the matter behind the paperwork',
    text: 'Legal problems rarely come with simple answers. Whether the matter concerns a family dispute, a civil case, a business, a foreign university or a document that needs to be used abroad, the right preparation can make a real difference. We provide legal assistance with a practical approach, careful documentation and clear communication with our clients.',
  },
  overseas: {
    text: 'We also assist overseas Pakistanis with selected legal matters in Pakistan, including family proceedings, Special Power of Attorney arrangements and documentation. Explore the dedicated page for details.',
    cta: { label: 'Overseas Pakistanis', path: '/overseas-pakistanis' },
  },
}

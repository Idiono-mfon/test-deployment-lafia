const TYPES = {
  // controllers
  HealthController: Symbol('HealthController'),
  PatientController: Symbol('PatientController'),
  PractitionerController: Symbol('PractitionerController'),
  CodeSystemController: Symbol('CodeSystemController'),
  AuthController: Symbol('AuthController'),
  LanguageController: Symbol('LanguageController'),
  LabelController: Symbol('LabelController'),
  ComponentController: Symbol('ComponentController'),

  // service
  UserService: Symbol('UserService'),
  PatientService: Symbol('PatientService'),
  PractitionerService: Symbol('PractitionerService'),
  CodeSystemService: Symbol('CodeSystemService'),
  MessageBroker: Symbol('MessageBroker'),
  S3Service: Symbol('S3Service'),
  UtilityService: Symbol('UtilityService'),
  PlatformSdkService: Symbol('PlatformSdkService'),
  AuthService: Symbol('AuthService'),
  EmailService: Symbol('EmailService'),
  LanguageService: Symbol('LanguageService'),

  // repositories
  UserRepository: Symbol('UserRepository'),
  PractitionerRepository: Symbol('PractitionerRepository'),
  PatientRepository: Symbol('PatientRepository'),
  CodeSystemRepository: Symbol('CodeSystemRepository'),
  LanguageRepository: Symbol('LanguageRepository'),
  LabelRepository: Symbol('LabelRepository'),
  ComponentRepository: Symbol('ComponentRepository'),
};

export default TYPES;

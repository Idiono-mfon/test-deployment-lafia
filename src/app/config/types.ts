const TYPES = {
  // controllers
  HealthController: Symbol('HealthController'),
  PatientController: Symbol('PatientController'),
  PractitionerController: Symbol('PractitionerController'),
  CodeSystemController: Symbol('CodeSystemController'),

  // service
  UserService: Symbol('UserService'),
  PatientService: Symbol('PatientService'),
  PractitionerService: Symbol('PractitionerService'),
  CodeSystemService: Symbol('CodeSystemService'),
  MessageBroker: Symbol('MessageBroker'),
  S3Service: Symbol('S3Service'),
  UtilityService: Symbol('UtilityService'),

  // repositories
  UserRepository: Symbol('UserRepository'),
  PractitionerRepository: Symbol('PractitionerRepository'),
  PatientRepository: Symbol('PatientRepository'),
  CodeSystemRepository: Symbol('CodeSystemRepository'),

  // models
};

export default TYPES;

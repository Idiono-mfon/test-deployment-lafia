const TYPES = {
  // controllers
  HealthController: Symbol('HealthController'),
  PatientController: Symbol('PatientController'),
  CodeSystemController: Symbol('CodeSystemController'),

  // service
  UserService: Symbol('UserService'),
  PatientService: Symbol('PatientService'),
  CodeSystemService: Symbol('CodeSystemService'),
  MessageBroker: Symbol('MessageBroker'),

  // repositories
  UserRepository: Symbol('UserRepository'),
  PatientRepository: Symbol('PatientRepository'),
  CodeSystemRepository: Symbol('CodeSystemRepository'),

  // models
};

export default TYPES;

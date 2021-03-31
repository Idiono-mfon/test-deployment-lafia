const TYPES = {
  // controllers
  HealthController: Symbol('HealthController'),
  PortalController: Symbol('PortalController'),

  // service
  UserService: Symbol('UserService'),
  PatientService: Symbol('PatientService'),

  // repositories
  UserRepository: Symbol('UserRepository'),
  PatientRepository: Symbol('PatientRepository'),

  // models
};

export default TYPES;

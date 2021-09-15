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
  FhirServerController: Symbol('FhirServerController'),
  LafiaMediaController: Symbol('LafiaMediaController'),
  ConsentController: Symbol('ConsentController'),

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
  FhirServerService: Symbol('FhirServerService'),
  TwilioService: Symbol('TwilioService'),
  VideoRecordService: Symbol('VideoRecordService'),
  LafiaMediaService: Symbol('LafiaMediaService'),
  ConsentService: Symbol('ConsentService'),
  VideoBroadcastService: Symbol('VideoBroadcastService'),
  TwilioRoomService: Symbol('TwilioRoomService'),
  ConnectionService: Symbol('ConnectionService'),

  // repositories
  UserRepository: Symbol('UserRepository'),
  PractitionerRepository: Symbol('PractitionerRepository'),
  PatientRepository: Symbol('PatientRepository'),
  CodeSystemRepository: Symbol('CodeSystemRepository'),
  LanguageRepository: Symbol('LanguageRepository'),
  LabelRepository: Symbol('LabelRepository'),
  ComponentRepository: Symbol('ComponentRepository'),
  VideoRecordRepository: Symbol('VideoRecordRepository'),
  VideoBroadcastRepository: Symbol('VideoBroadcastRepository'),
  PractitionerVideoBroadcastRepository: Symbol('PractitionerVideoBroadcastRepository'),
  TwilioRoomRepository: Symbol('TwilioRoomRepository'),
  ConnectionRepository: Symbol('ConnectionRepository'),
  
  // middlewares
  AuthMiddleware: Symbol('AuthMiddleware'),
};

export default TYPES;

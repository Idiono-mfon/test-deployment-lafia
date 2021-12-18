const TYPES = {
  // controllers
  AuthController: Symbol('AuthController'),
  UserController: Symbol('UserController'),
  BaseController: Symbol('BaseController'),
  LabelController: Symbol('LabelController'),
  HealthController: Symbol('HealthController'),
  PatientController: Symbol('PatientController'),
  ConsentController: Symbol('ConsentController'),
  LanguageController: Symbol('LanguageController'),
  ComponentController: Symbol('ComponentController'),
  FhirServerController: Symbol('FhirServerController'),
  LafiaMediaController: Symbol('LafiaMediaController'),
  CodeSystemController: Symbol('CodeSystemController'),
  LafiaVideoController: Symbol('LafiaVideoController'),
  PractitionerController: Symbol('PractitionerController'),
  FhirResourceController: Symbol('FhirResourceController'),
  ImplementationGuideController: Symbol('ImplementationGuideController'),

  // service
  S3Service: Symbol('S3Service'),
  KafkaSetup: Symbol('KafkaSetup'),
  RedisStore: Symbol('RedisStore'),
  UserService: Symbol('UserService'),
  AuthService: Symbol('AuthService'),
  FileService: Symbol('FileService'),
  EmailService: Symbol('EmailService'),
  KafkaService: Symbol('KafkaService'),
  RabbitMqSetup: Symbol('RabbitMqSetup'),
  TwilioService: Symbol('TwilioService'),
  PatientService: Symbol('PatientService'),
  UtilityService: Symbol('UtilityService'),
  LanguageService: Symbol('LanguageService'),
  RabbitMqService: Symbol('RabbitMqService'),
  FirebaseService: Symbol('FirebaseService'),
  ConnectionService: Symbol('ConnectionService'),
  FhirServerService: Symbol('FhirServerService'),
  CodeSystemService: Symbol('CodeSystemService'),
  LafiaMediaService: Symbol('LafiaMediaService'),
  TwilioRoomService: Symbol('TwilioRoomService'),
  VideoRecordService: Symbol('VideoRecordService'),
  FhirResourceService: Symbol('FhirResourceService'),
  PractitionerService: Symbol('PractitionerService'),
  VideoBroadcastService: Symbol('VideoBroadcastService'),
  SignallingServerService: Symbol('SignallingServerService'),
  ImplementationGuideService: Symbol('ImplementationGuideService'),

  // repositories
  BaseRepository: Symbol('BaseRepository'),
  UserRepository: Symbol('UserRepository'),
  LabelRepository: Symbol('LabelRepository'),
  PatientRepository: Symbol('PatientRepository'),
  LanguageRepository: Symbol('LanguageRepository'),
  ComponentRepository: Symbol('ComponentRepository'),
  TwilioRoomRepository: Symbol('TwilioRoomRepository'),
  ConnectionRepository: Symbol('ConnectionRepository'),
  CodeSystemRepository: Symbol('CodeSystemRepository'),
  VideoRecordRepository: Symbol('VideoRecordRepository'),
  PractitionerRepository: Symbol('PractitionerRepository'),
  FhirResourceRepository: Symbol('FhirResourceRepository'),
  VideoBroadcastRepository: Symbol('VideoBroadcastRepository'),
  ImplementationGuideRepository: Symbol('ImplementationGuideRepository'),
  PractitionerVideoBroadcastRepository: Symbol('PractitionerVideoBroadcastRepository'),

  // models
  ModelClass: Symbol('ModelClass'),

  // middlewares
  AuthMiddleware: Symbol('AuthMiddleware'),

  // Utils
  TokenUtil: Symbol('TokenUtil'),

  // Server
  App: Symbol('App'),
};

export default TYPES;

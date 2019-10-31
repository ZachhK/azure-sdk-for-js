import * as coreHttp from "@azure/core-http";
import { ParsedKeyVaultEntityIdentifier } from "./core/keyVaultBase";
import {
  SecretProperties,
  CertificateAttributes,
  KeyVaultClientCreateCertificateOptionalParams,
  JsonWebKeyType,
  JsonWebKeyCurveName,
  LifetimeAction,
  KeyUsageType
} from "./core/models";

/**
 * Defines values for contentType.
 * Possible values include: 'application/pem', 'application/x-pkcs12'
 * @readonly
 * @enum {string}
 */
export type CertificateContentType = "application/pem" | "application/x-pkcs12" | undefined;

/**
 * @interface
 * An interface representing a certificate without the certificate's policy
 */
export interface Certificate {
  /**
   * The properties of the certificate
   */
  properties: CertificateProperties;
  /**
   * The key id.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly kid?: string;
  /**
   * The secret id.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly sid?: string;
  /**
   * CER contents of x509 certificate.
   */
  cer?: Uint8Array;
  /**
   * The content type of the secret.
   */
  contentType?: CertificateContentType;
  /**
   * The management policy.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly policy?: CertificatePolicy;
}

/**
 * @interface
 * An interface representing a certificate's policy
 */
export interface CertificatePolicy extends SecretProperties, CertificateAttributes {
  /**
   * The certificate id.
   * **NOTE: This property will not be serialized. It can only be populated by the server.**
   */
  readonly id?: string;
  /**
   * Actions that will be performed by Key Vault over the lifetime of a certificate.
   */
  lifetimeActions?: LifetimeAction[];
  /**
   * Indicates if the private key can be exported.
   */
  exportable?: boolean;
  /**
   * The type of key pair to be used for the certificate. Possible values include: 'EC', 'EC-HSM',
   * 'RSA', 'RSA-HSM', 'oct'
   */
  keyType?: JsonWebKeyType;
  /**
   * The key size in bits. For example: 2048, 3072, or 4096 for RSA.
   */
  keySize?: number;
  /**
   * Indicates if the same key pair will be used on certificate renewal.
   */
  reuseKey?: boolean;
  /**
   * Elliptic curve name. For valid values, see JsonWebKeyCurveName. Possible values include:
   * 'P-256', 'P-384', 'P-521', 'P-256K'
   */
  keyCurveType?: JsonWebKeyCurveName;
  /**
   * Name of the referenced issuer object or reserved names; for example, 'Self' or 'Unknown'.
   */
  issuerName?: string;
  /**
   * Type of certificate to be requested from the issuer provider.
   */
  certificateType?: string;
  /**
   * Indicates if the certificates generated under this policy should be published to certificate
   * transparency logs.
   */
  certificateTransparency?: boolean;
  /**
   * The subject name. Should be a valid X509 distinguished Name.
   */
  subjectName?: string;
  /**
   * The enhanced key usage.
   */
  ekus?: string[];
  /**
   * The subject alternative names.
   */
  subjectAlternativeNames?: SubjectAlternativeNames;
  /**
   * List of key usages.
   */
  keyUsage?: KeyUsageType[];
  /**
   * The duration that the certificate is valid in months.
   */
  validityInMonths?: number;
}

export interface SubjectAlternativeNames {
  /**
   * The subject type, either emails, DNS names or UPNs
   */
  subjectType: "emails" | "dnsNames" | "upns";
  /**
   * The subject values
   */
  subjectValues: string[];
}

/**
 * @interface
 * An interface representing the properties of a certificate
 */
export interface CertificateProperties extends ParsedKeyVaultEntityIdentifier {
  /**
   * The certificate id.
   */
  readonly id?: string;
  /**
   * Determines whether the object is enabled.
   */
  enabled?: boolean;
  /**
   * Not before date in UTC.
   */
  readonly notBefore?: Date;
  /**
   * When the certificate was created.
   */
  readonly created?: Date;
  /**
   * When the object was updated.
   */
  readonly updated?: Date;
  /**
   * Expiry date in UTC.
   */
  readonly expires?: Date;
  /**
   * Application specific
   * metadata in the form of key-value pairs.
   */
  tags?: CertificateTags;
  /**
   * Thumbprint of the certificate.
   */
  readonly x509Thumbprint?: Uint8Array;
}

/**
 * @interface
 * An interface representing a deleted certificate
 */
export interface DeletedCertificate extends Certificate {
  /**
   * The url of the recovery object, used to
   * identify and recover the deleted certificate.
   */
  recoveryId?: string;
  /**
   * The time when the certificate is scheduled
   * to be purged, in UTC
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly scheduledPurgeDate?: Date;
  /**
   * The time when the certificate was deleted, in UTC
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly deletedDate?: Date;
}

/**
 * @interface
 * An interface representing options for creating a certificate that can passed to {@link createCertificate}.
 */
export interface CreateCertificateOptions extends KeyVaultClientCreateCertificateOptionalParams {
  /**
   * Determines whether the object is enabled.
   */
  enabled?: boolean;
  /**
   * Options for this request
   */
  requestOptions?: coreHttp.RequestOptionsBase;
}

export type CertificateTags = { [propertyName: string]: string };

/**
 * @interface
 * An interface representing options that can be passed to {@link updateCertificate}.
 */
export interface UpdateCertificateOptions {
  /**
   * Type of the certificate value such as a
   * password.
   */
  contentType?: CertificateContentType;
  /**
   * Determines whether the object is enabled.
   */
  enabled?: boolean;
  /**
   * Not before date in UTC.
   */
  notBefore?: Date;
  /**
   * Expiry date in UTC.
   */
  expires?: Date;
  /**
   * Application specific
   * metadata in the form of key-value pairs.
   */
  tags?: CertificateTags;
  /**
   * Options for this request
   */
  requestOptions?: coreHttp.RequestOptionsBase;
}

/**
 * @interface
 * An interface representing the issuer of a certificate
 */
export interface CertificateIssuer {
  /**
   * Certificate Identifier.
   */
  id?: string;
  /**
   * The issuer provider.
   */
  provider?: string;
}

/**
 * @interface
 * An interface representing the properties of an issuer
 */
export interface IssuerProperties {
  /**
   * Certificate Identifier.
   */
  id?: string;
  /**
   * The issuer provider.
   */
  provider?: string;
  /**
   * Determines whether the object is enabled.
   */
  enabled?: boolean;
  /**
   * When the issuer was created.
   */
  created?: Date;
  /**
   * When the issuer was updated.
   */
  updated?: Date;
  /**
   * Name of the issuer
   */
  name?: string;
}

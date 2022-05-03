// https://www.terraform.io/docs/providers/snowflake/r/role_ownership_grant
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RoleOwnershipGrantConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies whether to remove or transfer all existing outbound privileges on the object when ownership is transferred to a new role.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/role_ownership_grant#current_grants RoleOwnershipGrant#current_grants}
  */
  readonly currentGrants?: string;
  /**
  * The name of the role ownership is granted on.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/role_ownership_grant#on_role_name RoleOwnershipGrant#on_role_name}
  */
  readonly onRoleName: string;
  /**
  * The name of the role to grant ownership. Please ensure that the role that terraform is using is granted access.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/snowflake/r/role_ownership_grant#to_role_name RoleOwnershipGrant#to_role_name}
  */
  readonly toRoleName: string;
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/snowflake/r/role_ownership_grant snowflake_role_ownership_grant}
*/
export class RoleOwnershipGrant extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "snowflake_role_ownership_grant";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/snowflake/r/role_ownership_grant snowflake_role_ownership_grant} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RoleOwnershipGrantConfig
  */
  public constructor(scope: Construct, id: string, config: RoleOwnershipGrantConfig) {
    super(scope, id, {
      terraformResourceType: 'snowflake_role_ownership_grant',
      terraformGeneratorMetadata: {
        providerName: 'snowflake',
        providerVersion: '0.33.0',
        providerVersionConstraint: ' ~> 0.25'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._currentGrants = config.currentGrants;
    this._onRoleName = config.onRoleName;
    this._toRoleName = config.toRoleName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // current_grants - computed: false, optional: true, required: false
  private _currentGrants?: string; 
  public get currentGrants() {
    return this.getStringAttribute('current_grants');
  }
  public set currentGrants(value: string) {
    this._currentGrants = value;
  }
  public resetCurrentGrants() {
    this._currentGrants = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentGrantsInput() {
    return this._currentGrants;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // on_role_name - computed: false, optional: false, required: true
  private _onRoleName?: string; 
  public get onRoleName() {
    return this.getStringAttribute('on_role_name');
  }
  public set onRoleName(value: string) {
    this._onRoleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get onRoleNameInput() {
    return this._onRoleName;
  }

  // to_role_name - computed: false, optional: false, required: true
  private _toRoleName?: string; 
  public get toRoleName() {
    return this.getStringAttribute('to_role_name');
  }
  public set toRoleName(value: string) {
    this._toRoleName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get toRoleNameInput() {
    return this._toRoleName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      current_grants: cdktf.stringToTerraform(this._currentGrants),
      on_role_name: cdktf.stringToTerraform(this._onRoleName),
      to_role_name: cdktf.stringToTerraform(this._toRoleName),
    };
  }
}

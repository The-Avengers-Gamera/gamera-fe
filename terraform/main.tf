terraform {
  required_version = ">= 0.13"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }
  backend "s3" {
    bucket = "gamera-terraform"
    key = "frontend/state.tfstate" //换成variables
    region = "ap-southeast-2"
  }
}

provider "aws" {
  region = "ap-southeast-2"
  access_key = var.access_key
  secret_key = var.secret_key
}

provider "aws"{
  alias = "acm_provider"
  region = "us-east-1"
}

module "S3_bucket" {
  source = "./S3"
  bucket_name = var.bucket_name
  tags = var.tags
  domain_name = var.domain_name
}

module "acm_certification" {
  source = "./acm"
  main_domain = var.main_domain
  domain_name = var.domain_name
}

module "cloudfront_distribution"{
  source = "./cloudfront"
  bucket_name = var.bucket_name
  domain_name = var.domain_name
  tags = var.tags
}


/* If main then S3 bucket for redirecting www to non-www.
locals {
  #写判断式是否以www开头
}
resource "aws_s3_bucket" "root_bucket" {
  bucket = var.bucket_name
  acl    = "public-read"
  policy = templatefile("S3/s3-policy.json", { bucket = var.bucket_name })

  website {
    redirect_all_requests_to = "https://${var.domain_name}"
  }

  tags = var.common_tags
}
*/
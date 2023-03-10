variable "bucket_name" {
    type        = string
    description = "Name of the bucket, like 'gamera.com.au'"
}

variable "tags" {
    type = map(string)
    description = "Tags added to resources"
    default = {}
}

variable "domain_name"{
    type = string
    description = "name of the domain"
}

variable "main_domain" {
    type = string
    description = "nameserver of the domain"
}

variable "access_key"{
    type = string
    description = "aws access key"
}

variable "secret_key"{
    type = string
    description = "aws secret key"
}
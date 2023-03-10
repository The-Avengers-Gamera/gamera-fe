resource "aws_acm_certificate" "ssl_cert" {
  domain_name  = var.domain_name
  validation_method  = "DNS"

  tags = {
    name = "ACM cert for ${var.domain_name}"
  }

  lifecycle {
    create_before_destroy = true
  }

  validation_option {
    domain_name = var.domain_name
    validation_domain = var.main_domain
  }

}

resource "aws_acm_certificate_validation" "cert_validation" {
  certificate_arn = aws_acm_certificate.ssl_cert.arn
  validation_record_fqdns = [for record in aws_route53_record.cert_validation : record.fqdn]
}
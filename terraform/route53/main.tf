/* when main name server is not registered
resource "aws_route53_zone" "main" {
  name = var.domain_name
  tags = var.tags
}
*/

data "aws_route53_zone" "main_server"{
    name = var.main_domain
}

output "zone_id" {
    value = data.aws_route53_record.main_server.id
}

resource "aws_route53_record" "new_record" {
  zone_id = output.zone_id
  name = var.domain_name
  type = "A"
  ttl = "300"

  alias {
    name                   = aws_cloudfront_distribution.root_s3_distribution.domain_name
    zone_id                = aws_cloudfront_distribution.root_s3_distribution.hosted_zone_id
    evaluate_target_health = false
  }
}

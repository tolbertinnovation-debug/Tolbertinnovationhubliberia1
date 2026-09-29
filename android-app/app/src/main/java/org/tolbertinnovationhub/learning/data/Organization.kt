package org.tolbertinnovationhub.learning.data

import org.json.JSONObject

data class InformationSection(val title: String, val paragraphs: List<String>)
data class Organization(val name: String, val email: String, val phone: String, val address: String,
    val website: String, val mission: String, val vision: String, val hours: List<String>,
    val policyUpdated: String, val audience: InformationSection, val rights: InformationSection, val terms: List<InformationSection>,
    val privacy: List<InformationSection>, val help: List<InformationSection>) {
    companion object {
        fun parse(o: JSONObject): Organization {
            fun section(value: JSONObject) = InformationSection(value.getString("title"), value.getJSONArray("paragraphs").strings())
            return Organization(o.getString("name"), o.getString("email"), o.getString("phone"), o.getString("address"),
                o.getString("website"), o.getString("mission"), o.getString("vision"), o.getJSONArray("hours").strings(),
                o.getString("policyUpdated"), section(o.getJSONObject("audience")), section(o.getJSONObject("rights")),
                o.getJSONArray("terms").objects().map(::section), o.getJSONArray("privacy").objects().map(::section), o.getJSONArray("help").objects().map(::section))
        }
    }
}
